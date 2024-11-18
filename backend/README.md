<!-- markdownlint-disable MD033 -->

# Medical Appointment Control

## Environment

This aplication is created using Node.js v20. It is recommended using
**[nvm](https://github.com/creationix/nvm)** (Node Version Manager) to manage
Node.js versions. Go to
[github.com/creationix/nvm](https://github.com/creationix/nvm) and check the
installation process for your OS.

Make sure to set the env variables. For local environment you can create a
`.env` file with the following environment variables:

```bash
# dev | prod | test
NODE_ENV=dev
APP_HOST=localhost
APP_PORT=3004

## Running the server

Install required dependencies:

```bash
npm install
```

After all dependencies are installed, just run the commands below:

```bash
npm run dev:server
```

## Scripts

- `npm run dev:server` - Starts the server in development mode (watch mode).
- `npm run build-all`- Builds the project in production mode.
- `npm run start` - Starts the server (compiled).
- `npm run test` - Runs all tests.

## Endpoints

The following endpoints are exposed by Express:

- `/docs` This README in html.
