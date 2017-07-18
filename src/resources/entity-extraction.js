import rp from 'request-promise-native';
import config from '../config';
import ApiResource from './api-resource';

export default class EntityExtraction extends ApiResource {
  compute({
    sentence,
    locale,
    dimensions,
    antidimensions,
    timezone,
    capitalize,
    quote,
    unicode,
    latent,
  }) {
    const options = {
      method: 'GET',
      rejectUnauthorized: false,
      uri: config.ENTITY_EXTRACTION_API,
      // Needed so that arrays are serialized to foo=bar&foo=baz
      // Instead of foo[0]=bar&foo[1]=baz
      // (dimensions for example)
      useQuerystring: true,
      qs: {
        sentence,
        locale,
        dimensions,
        antidimensions,
        timezone,
        cap: capitalize,
        quo: quote,
        uni: unicode,
        latent,
      },
      headers: this.headers,
    };
    return rp(options);
  }
}
