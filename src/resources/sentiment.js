import rp from 'request-promise-native';
import config from '../config';
import ApiResource from './api-resource';


class Sentiment extends ApiResource {

  compute(message) {
    const options = {
      method: 'GET',
      uri: config.SENTIMENT_API,
      qs: {
        sentence: message.body,
      },
      headers: this.headers,
    };

    return rp(options);
  }
}

module.exports = Sentiment;
