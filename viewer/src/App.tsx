import { useState, Suspense, useMemo, useRef, useCallback, useEffect } from 'react';
import { Player, Thumbnail } from '@remotion/player';
import { compositions, type CompositionEntry } from './compositionRegistry';

// Copying is for pasting into a chat or a doc, not for handoff — three quarters of
// the canvas keeps small text crisp while still rendering faster and pasting lighter
// than the real thing. "Export" stays full size.
const COPY_IMAGE_SCALE = 0.75;

const ZOOM_MIN = 25;
const ZOOM_MAX = 300;

function StillPreview({
  composition,
  zoom,
  panOffset,
  onPanChange,
  onZoomChange,
}: {
  composition: CompositionEntry;
  zoom: number;
  panOffset: { x: number; y: number };
  onPanChange: (offset: { x: number; y: number }) => void;
  onZoomChange: (zoom: number) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;

  // Wheel zoom needs a non-passive listener to preventDefault page scroll.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const next = Math.round(
        Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, zoomRef.current - e.deltaY * 0.5))
      );
      onZoomChange(next);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onZoomChange]);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 100) return;
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...panOffset };
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    e.preventDefault();
  }, [zoom, panOffset]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    onPanChange({ x: panStart.current.x + dx, y: panStart.current.y + dy });
  }, [isDragging, onPanChange]);

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
  }, []);

  const canPan = zoom > 100;
  const scale = zoom / 100;

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden relative touch-none"
      style={{ cursor: canPan ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      onDoubleClick={() => onZoomChange(100)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <Thumbnail
          component={composition.component}
          compositionWidth={composition.width}
          compositionHeight={composition.height}
          durationInFrames={composition.durationInFrames}
          fps={composition.fps}
          frameToDisplay={0}
          style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
}

function VideoPreview({ composition }: { composition: CompositionEntry }) {
  return (
    <Player
      component={composition.component}
      durationInFrames={composition.durationInFrames}
      compositionWidth={composition.width}
      compositionHeight={composition.height}
      fps={composition.fps}
      style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}
      controls
      autoPlay
      loop
      acknowledgeRemotionLicense
    />
  );
}

function RenderPanel({
  composition,
  isOpen,
  onClose,
}: {
  composition: CompositionEntry;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [rendering, setRendering] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) setError(null);
  }, [isOpen, composition.id]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isStill = composition.isStill;

  const handleExport = async (format: 'png' | 'jpeg' | 'mp4') => {
    setRendering(format);
    setError(null);
    try {
      const response = await fetch('/api/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ compositionId: composition.id, format }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Render failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${composition.id}.${format === 'jpeg' ? 'jpeg' : format}`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Render failed');
    } finally {
      setRendering(null);
    }
  };

  return (
    <div className="absolute inset-0 bg-black/20 z-50 flex items-center justify-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Export ${composition.screenName}`}
        className="bg-white rounded-lg shadow-xl border border-gray-200 w-[400px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
          <span className="text-[14px] font-semibold text-gray-800">Export {composition.screenName}</span>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg leading-none">&times;</button>
        </div>

        <div className="p-5 space-y-2.5">
          {isStill ? (
            <>
              <ExportButton
                label="Export PNG"
                sublabel="Lossless, best quality"
                onClick={() => handleExport('png')}
                loading={rendering === 'png'}
                disabled={rendering !== null}
              />
              <ExportButton
                label="Export JPEG"
                sublabel="Smaller file, quality 90"
                onClick={() => handleExport('jpeg')}
                loading={rendering === 'jpeg'}
                disabled={rendering !== null}
              />
            </>
          ) : (
            <>
              <ExportButton
                label="Export MP4"
                sublabel="Video render"
                onClick={() => handleExport('mp4')}
                loading={rendering === 'mp4'}
                disabled={rendering !== null}
              />
              <ExportButton
                label="Export PNG"
                sublabel="First frame as still"
                onClick={() => handleExport('png')}
                loading={rendering === 'png'}
                disabled={rendering !== null}
              />
            </>
          )}

          {error && (
            <div className="mt-3 text-[12px] text-red-600 bg-red-50 border border-red-100 rounded-md px-3 py-2">
              {error}
            </div>
          )}

          {rendering && (
            <div className="mt-3 text-[12px] text-gray-500 text-center animate-pulse">
              Rendering… this may take a moment
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ExportButton({
  label,
  sublabel,
  onClick,
  loading,
  disabled,
}: {
  label: string;
  sublabel: string;
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
        loading
          ? 'border-blue-200 bg-blue-50 text-blue-700'
          : disabled
          ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
          : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-800 hover:border-gray-300'
      }`}
    >
      <div className="text-left">
        <div className="text-[13px] font-medium">{label}</div>
        <div className="text-[11px] text-gray-400 mt-0.5">{sublabel}</div>
      </div>
      {loading && (
        <div className="w-4 h-4 border-2 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
      )}
    </button>
  );
}

const SELECTED_ID_STORAGE_KEY = 'viewer.selectedCompositionId';
const COLLAPSED_PROJECTS_STORAGE_KEY = 'viewer.collapsedProjects';

function App() {
  const [selectedId, setSelectedId] = useState(() => {
    const stored = localStorage.getItem(SELECTED_ID_STORAGE_KEY);
    return compositions.some(c => c.id === stored) ? stored! : compositions[0]?.id;
  });
  const [collapsedProjects, setCollapsedProjects] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(COLLAPSED_PROJECTS_STORAGE_KEY);
      if (stored) return new Set(JSON.parse(stored) as string[]);
    } catch { /* fall through to default */ }
    return new Set(compositions.map(c => c.projectName));
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [zoom, setZoom] = useState(100);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [renderPanelOpen, setRenderPanelOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = useCallback((id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);
  const [copyImageState, setCopyImageState] = useState<'idle' | 'copying' | 'copied' | 'failed'>('idle');
  const [copyImageError, setCopyImageError] = useState<string | null>(null);

  const handleCopyImage = useCallback(async (compositionId: string) => {
    setCopyImageState('copying');
    setCopyImageError(null);

    const renderPng = async () => {
      const response = await fetch('/api/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ compositionId, format: 'png', scale: COPY_IMAGE_SCALE }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Render failed');
      }
      return response.blob();
    };

    try {
      if (typeof ClipboardItem === 'undefined' || !navigator.clipboard?.write) {
        throw new Error('This browser cannot copy images to the clipboard');
      }
      // Handing the promise to ClipboardItem keeps the user gesture alive
      // across the render, which Safari requires.
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': renderPng() })]);
      setCopyImageState('copied');
      setTimeout(() => setCopyImageState('idle'), 2000);
    } catch (err) {
      setCopyImageState('failed');
      setCopyImageError(err instanceof Error ? err.message : 'Copy failed');
      setTimeout(() => setCopyImageState('idle'), 4000);
    }
  }, []);
  const [batchExporting, setBatchExporting] = useState<string | null>(null);
  const [batchError, setBatchError] = useState<string | null>(null);

  const handleBatchExport = useCallback(async (projectName: string) => {
    setBatchExporting(projectName);
    setBatchError(null);
    try {
      const response = await fetch('/api/render-project-zip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectName, format: 'png' }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Batch render failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `${projectName}-stills.zip`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(url);
    } catch (err) {
      setBatchError(err instanceof Error ? err.message : 'Batch export failed');
    } finally {
      setBatchExporting(null);
    }
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const projectGroups = useMemo(() => {
    const groups: { name: string; compositions: CompositionEntry[] }[] = [];
    for (const comp of compositions) {
      if (
        normalizedQuery &&
        !comp.screenName.toLowerCase().includes(normalizedQuery) &&
        !comp.projectName.toLowerCase().includes(normalizedQuery)
      ) {
        continue;
      }
      const existing = groups.find(g => g.name === comp.projectName);
      if (existing) {
        existing.compositions.push(comp);
      } else {
        groups.push({ name: comp.projectName, compositions: [comp] });
      }
    }
    return groups;
  }, [normalizedQuery]);

  const selectedComposition = compositions.find(c => c.id === selectedId) || compositions[0];

  // Reset zoom and pan when switching compositions
  useEffect(() => {
    setZoom(100);
    setPanOffset({ x: 0, y: 0 });
    setRenderPanelOpen(false);
  }, [selectedId]);

  useEffect(() => {
    if (selectedId) localStorage.setItem(SELECTED_ID_STORAGE_KEY, selectedId);
  }, [selectedId]);

  useEffect(() => {
    localStorage.setItem(COLLAPSED_PROJECTS_STORAGE_KEY, JSON.stringify([...collapsedProjects]));
  }, [collapsedProjects]);

  // Arrow keys step through the compositions visible in the sidebar
  // (search-filtered; collapsed groups are skipped unless a search is active).
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || renderPanelOpen) return;
      const expanded = projectGroups
        .filter(g => normalizedQuery || !collapsedProjects.has(g.name))
        .flatMap(g => g.compositions);
      // With every group collapsed, fall back to stepping through all screens.
      const visible = expanded.length > 0 ? expanded : projectGroups.flatMap(g => g.compositions);
      if (visible.length === 0) return;
      e.preventDefault();
      const currentIndex = visible.findIndex(c => c.id === selectedId);
      const delta = e.key === 'ArrowDown' ? 1 : -1;
      const nextIndex = currentIndex === -1
        ? 0
        : (currentIndex + delta + visible.length) % visible.length;
      setSelectedId(visible[nextIndex].id);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [projectGroups, collapsedProjects, normalizedQuery, selectedId, renderPanelOpen]);

  if (!selectedComposition) return null;

  const isStill = selectedComposition.isStill;

  const toggleProject = (projectName: string) => {
    setCollapsedProjects(prev => {
      const next = new Set(prev);
      if (next.has(projectName)) {
        next.delete(projectName);
      } else {
        next.add(projectName);
      }
      return next;
    });
  };

  const handleZoomChange = useCallback((value: number) => {
    setZoom(value);
    if (value <= 100) setPanOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f8f8f8] text-gray-900 relative">
      {/* Sidebar */}
      <div className="w-[240px] bg-white border-r border-gray-200 flex flex-col h-full shrink-0">
        <div className="px-4 py-3 border-b border-gray-200">
          <span className="text-[13px] font-semibold text-gray-800">designnflow</span>
        </div>
        <div className="px-3 py-2 border-b border-gray-100">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search screens…"
            className="w-full text-[12px] px-2.5 py-1.5 rounded-md border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-300 focus:outline-none placeholder:text-gray-400 transition-colors"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {projectGroups.length === 0 && (
            <div className="px-4 py-6 text-[12px] text-gray-400 text-center">No screens match</div>
          )}
          {projectGroups.map((group) => {
            const isCollapsed = !normalizedQuery && collapsedProjects.has(group.name);
            return (
              <div key={group.name}>
                <div className="flex items-center sticky top-0 bg-white z-10 border-b border-gray-100">
                  <button
                    onClick={() => toggleProject(group.name)}
                    className="flex-1 flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">{group.name}</span>
                    <span className="text-[10px] text-gray-400">{isCollapsed ? '▸' : '▾'} {group.compositions.length}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!group.compositions.some(c => c.isStill)) return;
                      handleBatchExport(group.name);
                    }}
                    disabled={batchExporting !== null}
                    title={`Export all stills as ZIP`}
                    className={`px-2.5 py-2.5 transition-colors ${
                      batchExporting === group.name
                        ? 'text-blue-500 animate-pulse'
                        : batchExporting !== null
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {batchExporting === group.name ? (
                      <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" strokeDasharray="60" strokeDashoffset="15" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {!isCollapsed && group.compositions.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedId(comp.id)}
                    className={`w-full text-left pl-6 pr-4 py-[7px] text-[13px] transition-colors ${
                      selectedId === comp.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {comp.screenName}
                      {!comp.isStill && (
                        <svg className="w-3 h-3 opacity-40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="2" />
                          <line x1="7" y1="2" x2="7" y2="22" />
                          <line x1="17" y1="2" x2="17" y2="22" />
                          <line x1="2" y1="7" x2="7" y2="7" />
                          <line x1="2" y1="12" x2="7" y2="12" />
                          <line x1="2" y1="17" x2="7" y2="17" />
                          <line x1="17" y1="7" x2="22" y2="7" />
                          <line x1="17" y1="12" x2="22" y2="12" />
                          <line x1="17" y1="17" x2="22" y2="17" />
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
        {batchError && (
          <div className="border-t border-red-100 bg-red-50 px-4 py-2.5 flex items-start justify-between gap-2">
            <span className="text-[11px] text-red-600 break-words min-w-0">{batchError}</span>
            <button
              onClick={() => setBatchError(null)}
              className="text-red-400 hover:text-red-600 text-sm leading-none shrink-0"
              aria-label="Dismiss error"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="h-11 border-b border-gray-200 bg-white flex items-center px-5 justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-semibold text-gray-800">{selectedComposition.screenName}</span>
            <span className="text-[11px] text-gray-400">
              {selectedComposition.width} × {selectedComposition.height}
              {!isStill && ` · ${selectedComposition.durationInFrames}f`}
            </span>
            <button 
              onClick={() => handleCopyId(selectedComposition.id)}
              className="ml-2 flex items-center gap-1.5 px-2 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md text-[10px] font-medium text-gray-500 hover:text-gray-700 transition-colors"
              title="Copy ID to tag AI agent"
            >
              {copiedId === selectedComposition.id ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span>Copy ID</span>
                </>
              )}
            </button>
            {isStill && (
              <button
                onClick={() => handleCopyImage(selectedComposition.id)}
                disabled={copyImageState === 'copying'}
                className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md text-[10px] font-medium text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-60"
                title={
                  copyImageError ??
                  `Copy this still to the clipboard at ${Math.round(COPY_IMAGE_SCALE * 100)}% size (${Math.round(selectedComposition.width * COPY_IMAGE_SCALE)} × ${Math.round(selectedComposition.height * COPY_IMAGE_SCALE)})`
                }
              >
                {copyImageState === 'copied' ? (
                  <>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="text-emerald-600">Copied</span>
                  </>
                ) : copyImageState === 'failed' ? (
                  <span className="text-red-600">Copy failed</span>
                ) : (
                  <>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    <span>{copyImageState === 'copying' ? 'Rendering…' : 'Copy image'}</span>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Zoom controls (stills only) */}
            {isStill && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleZoomChange(100)}
                  className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Fit
                </button>
                <input
                  type="range"
                  min={25}
                  max={300}
                  value={zoom}
                  onChange={(e) => handleZoomChange(Number(e.target.value))}
                  className="w-24 h-1 accent-blue-500"
                />
                <span className="text-[11px] text-gray-500 w-8 text-right tabular-nums">{zoom}%</span>
              </div>
            )}

            {/* Export button */}
            <button
              onClick={() => setRenderPanelOpen(true)}
              className="text-[12px] px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
            >
              Export
            </button>
          </div>
        </div>

        {/* Preview Container */}
        <div className="flex-1 overflow-hidden flex items-center justify-center bg-[#e8e8e8] p-6 relative">
          <div
            className="flex items-center justify-center"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              aspectRatio: `${selectedComposition.width} / ${selectedComposition.height}`,
            }}
          >
            <Suspense fallback={<div className="text-gray-400 text-sm animate-pulse">Loading…</div>}>
              {isStill ? (
                <StillPreview
                  key={selectedComposition.id}
                  composition={selectedComposition}
                  zoom={zoom}
                  panOffset={panOffset}
                  onPanChange={setPanOffset}
                  onZoomChange={handleZoomChange}
                />
              ) : (
                <VideoPreview
                  key={selectedComposition.id}
                  composition={selectedComposition}
                />
              )}
            </Suspense>
          </div>
        </div>
      </div>

      {/* Render Panel Modal */}
      <RenderPanel
        composition={selectedComposition}
        isOpen={renderPanelOpen}
        onClose={() => setRenderPanelOpen(false)}
      />
    </div>
  );
}

export default App;
