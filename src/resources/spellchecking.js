import config from '../config';
import ApiResource from './api-resource';

export default class Spellchecking extends ApiResource {
  compute({ sentence, key }) {
    const options = {
      method: 'GET',
      uri: config.SPELLCHECKING_API,
      qs: { sentence, key },
    };
    return this.rp(options);
  }
}
