# botfuel-nlp-sdk

NLP web services wrapper for Node.js

## How to setup

Install:
```
npm install --save botfuel-nlp-sdk
```

Environment variables:
- `PROXY_HOST`: Botfuel proxy host (default to: `https://api.botfuel.io`).

## How to use

With babel:
```node.js
import SpellCheck from './resources/spellcheck';

const spellChecker = new SpellCheck({ appId: 'myAppId', appKey: 'myAppKey' });
spellChecker.compute({ sentence: 'you aer bad' , key: 'EN_1'}).then(console.log);
```
