require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);
const config = require('./testsConfig');

describe('session auth app', () => {
  let bundle = {
    authData: config.authData
  };

  it('has an exchange for username/password', (done) => {
    appTester(App.authentication.sessionConfig.perform, bundle)
      .then((newAuthData) => {
        newAuthData.should.not.eql(null);
        done();
      })
      .catch(done);
  });

  it('has auth details added to every request', (done) => {
    appTester(App.authentication.sessionConfig.perform, bundle).then(result => {
      bundle.authData.sessionKey = result.sessionKey;

      appTester(App.authentication.test, bundle)
      .then((response) => {
        response.status.should.eql(200);
        response.request.headers['Authorization'].should.eql(result.sessionKey);
        done();
      })
      .catch(done);
    });
  });
});