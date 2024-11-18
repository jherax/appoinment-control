/* eslint-disable curly */
import http, {type Server} from 'node:http';

import bodyparser from 'body-parser';
import cors from 'cors';
import express, {type Express} from 'express';
import helmet from 'helmet';

import defaultRoutes from '../routes/default';
import config from './config';
import logger from './logger';

export class NodeServer {
  private readonly _app: Express;
  private readonly _server: Server;
  private _started = false;

  constructor() {
    this._app = express();
    this.config();
    this.routerConfig();
    this._server = http.createServer(this._app);
  }

  private config() {
    this._app.use(cors<cors.CorsRequest>());
    this._app.use(bodyparser.json({limit: '1mb'}));
    this._app.use(bodyparser.urlencoded({extended: true}));
    // https://blog.logrocket.com/using-helmet-node-js-secure-application/
    // https://helmetjs.github.io/#cross-origin-resource-policy
    this._app.use(helmet());
  }

  private routerConfig() {
    defaultRoutes(this._app);
  }

  public get app(): Express {
    return this._app;
  }

  public get server(): Server {
    return this._server;
  }

  public start(): void {
    if (this._started) return;
    const {HOST, PORT} = config.app;
    this._server.listen(PORT, () => {
      logger.info(`⚡️ Express running at http://${HOST}:${PORT}`);
      this._started = true;
    });
  }
}
