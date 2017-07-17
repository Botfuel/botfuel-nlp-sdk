import rp from 'request-promise-native';
import config from '../config';
import ApiResource from './api-resource';


class SentimentAnalysis extends ApiResource {

  compute({ sentence }) {
    const options = {
      method: 'GET',
      rejectUnauthorized: false,
      uri: config.SENTIMENT_ANALYSIS_API,
      qs: { sentence },
      headers: this.headers,
    };

    return rp(options);
  }
}

module.exports = SentimentAnalysis;
