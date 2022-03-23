# IGO Genomics

The new and improved IGO website built using the MEVN stack.

## Development Setup

### Backend

1. Configurations - Update `.env` file in `backend/` (Not available in git repo - take from VM `dlviigoweb1` at `/srv/www/igo-genomics/.env`)

2. Run
    ```
    cd backend
    npm install
    npm run start
    ```

### Frontend

1. Configurations - Update `config.js` file in `frontend/src` (Not available in git repo - take from VM `dlviigoweb1`)

2. Run
    ```
    cd frontend
    npm install
    npm run serve           # application should be started on localhost:3000
    ```

## Deploy

    **QA/Staging**
    ``` 
    make ENV=staging HOST=dlviigoweb1 deploy
    ```
    **PROD**
    ``` 
    make ENV=production HOST=plviigoweb1 deploy
    ```

Notes:
* This *DELETES* the existing application on the `HOST` specified. It then copies the packaged application created locally to the new location.
* This creates and copies a `dist` directory to the `backend` directory in your home on the `HOST` specified. Make sure your `~/deployments` exists on that `HOST`!
* `make deploy` is a `Makefile` command. If there are issues w/ this step, please review the `deploy` step of the [Makefile](https://github.com/mskcc/igo-genomics/blob/master/Makefile)
* Expect to enter your password four times - once to `scp` the packaged application, once to remotely send the install command, and twice to run `dzdo` remotely (`dzdo` allows for root access on our VM's and is needed so you can re-deploy if another user was the last to deploy) 

