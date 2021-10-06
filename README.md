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
