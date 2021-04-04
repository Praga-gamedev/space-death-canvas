import clientConfig from './webpack/client.config';
import { ssrConfig, apiConfig } from './webpack/server.config';

module.exports = [clientConfig, ssrConfig, apiConfig];
