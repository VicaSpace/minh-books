import express from 'express';
import http from 'http';
import config from './config';
import { sequelize } from './db';
import { router } from './routes';

export const main = async () => {
  await sequelize.sync();

  const app = express();

  app.use(express.json());

  app.use('/api', router);

  app.get('*', (_req, res) => {
    res.status(404).send('Path does not exist');
  });

  const server = http.createServer(app);
  server.listen(config.app.port, () => {
    console.log(
      `Server is now running on ${config.app.host}:${config.app.port}.`
    );
  });
};
