clean:
	rm -rf frontend/build && \
	rm -rf frontend/node_modules

build-fe:
	cd frontend && \
	npm install && \
	NODE_ENV=$(ENV) npm run $(ENV) && \
	cd -

move-fe:
	mv frontend/dist/ backend/public

move:
	scp -r backend $(HOST):deployments/genomics

test_host:
	if [[ "$(HOST)" != "" ]]; then echo "Deploying to $(HOST)"; else printf "\nPlease specify HOST, e.g.\n\t'make HOST=igo.mskcc.org deploy'\n\n" && exit 1; fi

install:
	ssh $(HOST) 'dzdo -S rm -rf /srv/www/genomics && mv ~/deployments/genomics /srv/www && dzdo pm2 restart genomics'

deploy:
	make HOST=$(HOST) test_host && \
	make clean && \
	make ENV=$(ENV) build-fe && \
	make move-fe && \
	make HOST=$(HOST) move && \
	make HOST=$(HOST) install
