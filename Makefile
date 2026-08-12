.PHONY: dev sync install

dev: sync
	@echo "Starting viewer on http://localhost:4000"
	@(sleep 3 && open http://localhost:4000) &
	@cd viewer && npm run dev

sync:
	@npm run sync:viewer

install:
	@npm install && cd viewer && npm install
