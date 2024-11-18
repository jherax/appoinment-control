import path from 'node:path';

import express, {type Express, type Request, type Response} from 'express';

import config from '../server/config';
import messages from '../server/messages';
import {sendError} from '../server/responses';

/**
 * @see https://expressjs.com/en/guide/routing.html
 */

export default function defaultRoutes(app: Express) {
  const publicFolder = config.app.public;

  app.route('/').get((req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), publicFolder.docs, '/README.html'));
  });

  app.use(
    '/public',
    express.static(path.join(process.cwd(), publicFolder.images)),
  );

  app.use(function notFoundHandler(_req, res: Response) {
    sendError(res, {
      code: messages.NOT_FOUND.statusCode,
      message: 'Not Found',
    });
  });
}
