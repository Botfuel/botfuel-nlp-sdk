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
