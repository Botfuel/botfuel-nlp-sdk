import rp from 'request-promise-native';
import config from '../config';
import ApiResource from './api-resource';


export default class SpellCheck extends ApiResource {
  compute({ sentence, key }) {
    const options = {
      method: 'GET',
      rejectUnauthorized: false,
      uri: config.SPELLCHECK_API,
      qs: { sentence, key },
      headers: this.headers,
    };
    return rp(options);
  }
}
