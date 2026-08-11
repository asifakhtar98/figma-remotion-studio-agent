import type {FC} from 'react';

/**
 * A text-entry caret. Purely presentational — whether it is drawn on any given
 * frame is decided by the caller, so this stays usable in a still render.
 */
export const TextCaret: FC = () => (
  <span className="inline-block w-[2px] h-[1em] -mb-0.5 bg-blue-500 align-baseline" />
);
