import rp from 'request-promise-native';

export default class ApiResource {
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
      });
  }
}
