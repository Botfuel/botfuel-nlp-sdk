import rp from 'request-promise-native';

export default class ApiResource {
  /**
   * Clean parameters object by filtering out undefineds.
   *
   * @param {Object} params the parameters object.
   * @returns {Object} the clean object of parameters
   * @static
   * @memberof ApiResource
   */
  static cleanParameters = params =>
    Object.keys(params).reduce((returns, element) => {
      if (params[element] !== undefined) {
        return { ...returns, [element]: params[element] };
      }
      return returns;
    }, {});

  constructor({ appId, appKey }) {
    const baseOptions = {
      headers: { 'App-Id': appId, 'App-Key': appKey },
      rejectUnauthorized: false,
      json: true,
    };

    this.rp = options =>
      rp({
        ...baseOptions,
        ...options,
        ...(options.qs && { qs: this.constructor.cleanParameters(options.qs) }),
        ...(options.body && { body: this.constructor.cleanParameters(options.body) }),
      });
  }
}
