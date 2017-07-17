import rp from 'request-promise-native';
import config from '../config';
import ApiResource from './api-resource';


export default class EntityExtraction extends ApiResource {

  compute({ sentence, locale, entities }) {
    const options = {
      method: 'GET',
      rejectUnauthorized: false,
      uri: config.ENTITY_EXTRACTION_API,
      qs: { sentence, locale, entities },
      headers: this.headers,
    };
    return rp(options);
  }
}
