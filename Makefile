DOCKER_REPO := docker.cwx.io/poker/webclient

-include artifacts/make/js/Makefile
-include artifacts/make/js/mixin/babel-7.mk
-include artifacts/make/js/mixin/eslint.mk
-include artifacts/make/js/mixin/sparse.mk
-include artifacts/make/js/mixin/node.mk
-include artifacts/make/docker/Makefile

artifacts/make/%/Makefile:
	curl -sf https://make.cwx.io | bash /dev/stdin $*

.PHONY: lint
lint:: artifacts/logs/node-modules-dev
	node_modules/.bin/coffeelint --cache --quiet -color=always src