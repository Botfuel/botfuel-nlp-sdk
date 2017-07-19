const urlJoin = require('url-join');

const baseConfig = {
  PROXY_HOST: process.env.BOTFUEL_PROXY_HOST || 'https://api.botfuel.io',
  SPELLCHECKING_ROUTE: '/nlp/spellchecking',
  SENTIMENT_ANALYSIS_ROUTE: '/nlp/sentiment-analysis',
  ENTITY_EXTRACTION_ROUTE: '/nlp/entity-extraction',
};

module.exports = {
  SPELLCHECKING_API:
    process.env.BOTFUEL_SPELLCHECKING_API_URL ||
    urlJoin(baseConfig.PROXY_HOST, baseConfig.SPELLCHECKING_ROUTE),

  SENTIMENT_ANALYSIS_API:
    process.env.BOTFUEL_SENTIMENT_ANALYSIS_API_URL ||
    urlJoin(baseConfig.PROXY_HOST, baseConfig.SENTIMENT_ANALYSIS_ROUTE),

  ENTITY_EXTRACTION_API:
    process.env.BOTFUEL_ENTITY_EXTRACTION_API_URL ||
    urlJoin(baseConfig.PROXY_HOST, baseConfig.ENTITY_EXTRACTION_ROUTE),
};
