const urlJoin = require('url-join');

const baseConfig = {
  PROXY_HOST: process.env.PROXY_HOST || 'https://api.botfuel.io',
  SPELLCHECK_ROUTE: '/spellchecker',
  SENTIMENT_ROUTE: '/sentiment',
  ENT_EXT_ROUTE: '/entity-extraction',
};

module.exports = {
  SPELLCHECK_API: urlJoin(
    baseConfig.SPELLCHECK_HOST || baseConfig.PROXY_HOST, baseConfig.SPELLCHECK_ROUTE
  ),
  SENTIMENT_API: urlJoin(
    baseConfig.SENTIMENT_HOST || baseConfig.PROXY_HOST, baseConfig.SENTIMENT_ROUTE
  ),
  ENT_EXT_API: urlJoin(
    baseConfig.ENT_EXT_HOST || baseConfig.PROXY_HOST, baseConfig.ENT_EXT_ROUTE
  ),
};
