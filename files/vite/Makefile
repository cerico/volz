tldr:
	@echo Available commands
	@echo ------------------
	@grep '^[[:alpha:]][^:[:space:]]*:' Makefile | cut -d ':' -f 1 | sort -u | sed 's/^/make /'
%:
	@$(MAKE) tldr
dev:
	yarn dev
test:
	yarn test
build:
	yarn build
install:
	yarn install
