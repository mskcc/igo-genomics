clean:
	rm -rf frontend/dist && \
	rm -rf frontend/node_modules && \
	rm -rf backend/node_modules && \
	rm -rf backend/public && \
	ssh $(HOST) 'dzdo -S rm -rf ~/deployments/genomics'

move-app:
	rsync -avz ./ $(HOST):deployments/genomics

build-fe:
	ssh $(HOST) 'cd ~/deployments/genomics/frontend/ && npm install && NODE_ENV=$(ENV) npm run $(ENV) && dzdo -S cp -rT dist/ ../backend/public'

test_host:
	if [[ "$(HOST)" != "" ]]; then echo "Deploying to $(HOST)"; else printf "\nPlease specify HOST, e.g.\n\t'make HOST=igo.mskcc.org deploy'\n\n" && exit 1; fi

install:
	ssh $(HOST) 'cd ~/deployments/genomics/backend/ && npm install && dzdo -S cp -rT ~/deployments/genomics/backend/ /srv/www/genomics && dzdo pm2 restart genomics'

deploy:
	make HOST=$(HOST) test_host && \
	make clean && \
	make HOST=$(HOST) move-app && \
	make ENV=$(ENV) build-fe && \
	make HOST=$(HOST) install