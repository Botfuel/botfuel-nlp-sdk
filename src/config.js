const urlJoin = require('url-join');

const baseConfig = {
  PROXY_HOST: process.env.BOTFUEL_PROXY_HOST || 'https://api.botfuel.io',
  SPELLCHECKING_ROUTE: '/nlp/spellchecking',
  SPELLCHECKING_VERSION: 'v0',
  SENTIMENT_ANALYSIS_ROUTE: '/nlp/sentiment-analysis',
  SENTIMENT_ANALYSIS_VERSION: 'v0',
  ENTITY_EXTRACTION_ROUTE: '/nlp/entity-extraction',
  ENTITY_EXTRACTION_VERSION: 'v0',
};

module.exports = {
  SPELLCHECKING_API:
    process.env.BOTFUEL_SPELLCHECKING_API_URL ||
    urlJoin(baseConfig.PROXY_HOST, baseConfig.SPELLCHECKING_ROUTE, baseConfig.SPELLCHECKING_VERSION),

  SENTIMENT_ANALYSIS_API:
    process.env.BOTFUEL_SENTIMENT_ANALYSIS_API_URL ||
    urlJoin(baseConfig.PROXY_HOST, baseConfig.SENTIMENT_ANALYSIS_ROUTE, baseConfig.SENTIMENT_ANALYSIS_VERSION),

  ENTITY_EXTRACTION_API:
    process.env.BOTFUEL_ENTITY_EXTRACTION_API_URL ||
    urlJoin(baseConfig.PROXY_HOST, baseConfig.ENTITY_EXTRACTION_ROUTE, baseConfig.ENTITY_EXTRACTION_VERSION),
};
