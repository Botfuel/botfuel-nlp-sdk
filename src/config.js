const urlJoin = require('url-join');

const baseConfig = {
  PROXY_HOST: process.env.PROXY_HOST || 'https://api.botfuel.io',
  SPELLCHECK_ROUTE: '/spellchecker',
  SENTIMENT_ROUTE: '/sentiment',
  ENTEXT_ROUTE: '/entity-extraction',
};

module.exports = {
  SPELLCHECK_API: urlJoin(
    baseConfig.SPELLCHECK_HOST || baseConfig.PROXY_HOST, baseConfig.SPELLCHECK_ROUTE
  ),
  SENTIMENT_API: urlJoin(
    baseConfig.SENTIMENT_HOST || baseConfig.PROXY_HOST, baseConfig.SENTIMENT_ROUTE
  ),
  ENTEXT_API: urlJoin(
    baseConfig.ENTEXT_HOST || baseConfig.PROXY_HOST, baseConfig.ENTEXT_ROUTE
  ),
};
