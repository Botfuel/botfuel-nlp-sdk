import rp from 'request-promise-native';
import config from '../config';
import ApiResource from './api-resource';


class EntityExtraction extends ApiResource {

  compute(message, locale, entities) {
    const options = {
      method: 'GET',
      uri: config.ENT_EXT_API,
      qs: {
        sentence: message.body,
        locale,
        entities,
      },
      headers: this.headers,
    };
    return rp(options);
  }
}

module.exports = EntityExtraction;
