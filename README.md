# botfuel-nlp-sdk

NLP web services wrapper for Node.js, includes:
- [Spell checking](src/resources/spellchecking.js);
- [Sentiment analysis](src/resources/sentiment-analysis.js);
- [Entity extraction](src/resources/entity-extraction.js).

## How to setup

Install using npm:
```shell
npm install --save botfuel-nlp-sdk
```

Environment variables:
- `BOTFUEL_PROXY_HOST`: Botfuel proxy host (default to: `https://api.botfuel.io`);
- `BOTFUEL_SPELLCHECKING_API_URL`: spellchecking api url (overrides `BOTFUEL_PROXY_HOST/nlp/spellchecking`);
- `BOTFUEL_SENTIMENT_ANALYSIS_API_URL`: sentiment analysis api url (overrides `BOTFUEL_PROXY_HOST/nlp/sentiment-analysis`);
- `BOTFUEL_ENTITY_EXTRACTION_API_URL`: entity extraction api url (overrides `BOTFUEL_PROXY_HOST/nlp/entity-extraction`).

## How to use

- Spell checking:
```node.js
const { Spellchecking } = require('botfuel-nlp-sdk');

const spellchecker = new Spellchecking({appId: 'myAppId', appKey: 'myAppKey'});
spellchecker.compute({ sentence: 'you aer bad', key: 'EN_1'}).then(console.log);
```

- Sentiment analysis:
```node.js
const { SentimentAnalysis } = require('botfuel-nlp-sdk');

const sentimentAnalyzer = new SentimentAnalysis({appId: 'myAppId', appKey: 'myAppKey'});
sentimentAnalyzer.compute({ sentence: 'you are bad' }).then(console.log);
```

- Entity extraction:
```node.js
const { EntityExtraction } = require('botfuel-nlp-sdk');

const entityExtractor = new EntityExtraction({appId: 'myAppId', appKey: 'myAppKey'});
entityExtractor.compute({ sentence: 'Today, you are bad', locale: 'en'}).then(console.log);
```
