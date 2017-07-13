import rp from 'request-promise-native';
import config from '../config';
import ApiResource from './api-resource';


export default class SpellCheck extends ApiResource {
  compute(message, dictionaryKey) {
    console.log(this.headers);
    const options = {
      method: 'GET',
      rejectUnauthorized: false,
      uri: config.SPELLCHECK_API,
      qs: {
        sentence: message.body,
        key: dictionaryKey,
      },
      headers: this.headers,
    };
    return rp(options);
  }
}
