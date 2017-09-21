import config from '../config';
import ApiResource from './api-resource';

class SentimentAnalysis extends ApiResource {
  compute({ sentence }) {
    const options = {
      method: 'GET',
      uri: config.SENTIMENT_ANALYSIS_API,
      qs: this.constructor.cleanParameters({ sentence }),
    };

    return this.rp(options);
  }
}

module.exports = SentimentAnalysis;
