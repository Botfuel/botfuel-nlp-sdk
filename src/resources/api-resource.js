export default class ApiResource {
  constructor({ appId, appKey }) {
    this.headers = { 'App-Id': appId, 'App-Key': appKey };
  }
}
