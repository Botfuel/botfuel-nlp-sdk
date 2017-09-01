import config from '../config';
import ApiResource from './api-resource';

export default class EntityExtraction extends ApiResource {
  compute({
    sentence,
    locale,
    dimensions,
    antidimensions,
    timezone,
    case-sensitive,
    keep-quotes,
    keep-accents,
    latent,
  }) {
    const options = {
      method: 'GET',
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
        case-sensitive,
        keep-quotes,
        keep-accents,
        latent,
      },
    };
    return this.rp(options);
  }
}
