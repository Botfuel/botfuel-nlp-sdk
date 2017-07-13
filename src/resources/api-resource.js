
export default class ApiResource {
  constructor({ appId, appKey }) {
    this.headers = { app_id: appId, app_key: appKey };
  }
}
