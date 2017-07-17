const urlJoin = require('url-join');

const baseConfig = {
  PROXY_HOST: process.env.PROXY_HOST || 'https://api.botfuel.io',
  SPELLCHECKING_ROUTE: '/spellchecking',
  SENTIMENT_ANALYSIS_ROUTE: '/nlp/sentiment-analysis',
  ENTITY_EXTRACTION_ROUTE: '/entity-extraction',
};

module.exports = {
  SPELLCHECKING_API: urlJoin(
    baseConfig.SPELLCHECKING_HOST || baseConfig.PROXY_HOST, baseConfig.SPELLCHECKING_ROUTE
  ),
  SENTIMENT_ANALYSIS_API: urlJoin(
    baseConfig.SENTIMENT_ANALYSIS_HOST || baseConfig.PROXY_HOST, baseConfig.SENTIMENT_ANALYSIS_ROUTE
  ),
  ENTITY_EXTRACTION_API: urlJoin(
    baseConfig.ENTITY_EXTRACTION_HOST || baseConfig.PROXY_HOST, baseConfig.ENTITY_EXTRACTION_ROUTE
  ),
};
