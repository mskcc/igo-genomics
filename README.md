# IGO Genomics

The new and improved IGO website built using the MEVN stack.

## Development Setup

### Backend

1. Configurations - Update `.env` file in `backend/` (Not available in git repo - take from VM `dlviigoweb1` at `/srv/www/genomics/.env`)

2. Run
    ```
    cd backend
    npm install
    npm run start
    ```

### Frontend

1. Configurations - Update `env.development`, `env.staging`, and `env.production` files in `frontend/` (Not available in git repo - take from VM `dlviigoweb1`).

2. Run
    ```
    cd frontend
    npm install
    npm run serve           # application should start on localhost:8080 and will use `env.development` by default
    ```

## Deploy

    **QA/Staging**
    ``` 
    make ENV=staging HOST=dlviigoweb1 deploy         # will build using `env.staging`
    ```
    **PROD**
    ``` 
    make ENV=production HOST=plviigoweb1 deploy      # will build using `env.production`
    ```

Notes:
* This *DELETES* the existing application on the `HOST` specified. It then copies the packaged application created locally to the new location.
* This creates and copies a `dist` directory to the `backend` directory in your home on the `HOST` specified. Make sure your `~/deployments` exists on that `HOST`!
* `make deploy` is a `Makefile` command. If there are issues w/ this step, please review the `deploy` step of the [Makefile](https://github.com/mskcc/igo-genomics/blob/master/Makefile)
* Expect to enter your password multiple times - once to `scp` the packaged application, once to remotely send the install command, and to run `dzdo` remotely (`dzdo` allows for root access on our VM's and is needed so you can re-deploy if another user was the last to deploy) 

