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
- `BOTFUEL_SPELLCHECKING_HOST`: spellchecking api host (default to `$PROXY_HOST`);
- `BOTFUEL_SENTIMENT_ANALYSIS_HOST`: sentiment analysis api host (default to `$PROXY_HOST`);
- `BOTFUEL_ENTITY_EXTRACTION_HOST`: entity extraction api host (default to `$PROXY_HOST`).

## How to use

- Spell checking:
```node.js
const { SpellChecking } = require('botfuel-nlp-sdk');

const spellChecker = new SpellChecking({appId: 'myAppId', appKey: 'myAppKey'});
spellChecker.compute({ sentence: 'you aer bad', key: 'EN_1'}).then(console.log);
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
entityExtractor.compute({ sentence: 'Today, you are bad', locale: 'EN_1'}).then(console.log);
```
