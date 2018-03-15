const socialForumSession = require('./triggers/socialForumSession');
const authentication = require('./authentication/authentication');

const includeSessionKeyHeader = (request, z, bundle) => {
  if (bundle.authData.sessionKey) {
    request.headers = request.headers || {};
    request.headers['Authorization'] = bundle.authData.sessionKey;
  }

  return request;
};

const sessionRefreshIf401 = (response, z, bundle) => {
  if (bundle.authData.sessionKey) {
    if (response.status === 401) {
      throw new z.errors.RefreshAuthError('Session key needs refreshing.');
    }
  }

  return response;
};

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,

  beforeRequest: [
    includeSessionKeyHeader
  ],

  afterResponse: [
    sessionRefreshIf401
  ],

  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [socialForumSession.key]: socialForumSession
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
  }
};

module.exports = App;
