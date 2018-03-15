const settings = require('../utils/settings');

const testAuth = (z, bundle) => {  
  const promise = z.request({
    url: `${settings.baseApiUrl}/user`,
  });
  
  return promise.then((response) => {
    if (response.status === 401) {
      throw new Error('The Session Key you supplied is invalid');
    }

    if(response.status !== 200) {
      throw new Error(settings.commonErrorMessage);
    }
    
    return response;
  });
};
  
const getSessionKey = (z, bundle) => {  
  const promise = z.request({
    method: 'POST',
    url: `${settings.baseUrl}/auth`,
    body: {
      email: bundle.authData.email,
      password: bundle.authData.password
    }
  });


  return promise.then((response) => {
    if (response.status === 401) {
      throw new Error('The username/password you supplied is invalid');
    }

    if(response.status != 200) {
      throw new Error(settings.commonErrorMessage);
    }

    const json = JSON.parse(response.content);

    return {
      sessionKey: json.token
    };
  });
};
  
module.exports = {
  type: 'session',
  fields: [
    { key: 'email', label: 'E-mail', required: true, type: 'string' },
    { key: 'password', label: 'Password', required: true, type: 'password' }
  ],
  test: testAuth,
  connectionLabel: '{{bundle.authData.email}}',
  // The method that will exchange the fields provided by the user for session credentials.
  sessionConfig: {
    perform: getSessionKey
  }
};