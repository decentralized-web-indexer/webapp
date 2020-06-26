import { logger } from 'jege';

const isProd = process.env.NODE_ENV === 'production';

const log = isProd
  ? function noop() {}
  : logger('[webapp]');

export {
  log,
};
