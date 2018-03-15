require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);
const config = require('./testsConfig');

describe('triggers', () => {
  let bundle = {};

  beforeEach((done) => {
    bundle.authData = config.authData

    appTester(App.authentication.sessionConfig.perform, bundle).then(result => {
      bundle.authData.sessionKey = result.sessionKey;
      done();
    });
  });


  describe('new social forum trigger', () => {
    it('should load social forum session', (done) => {
      appTester(App.triggers.socialForumSession.operation.perform, bundle)
        .then(results => {
          results.length.should.eql(1);
          done();
        })
        .catch(done);
    });

    it('should load social forums list', (done) => {
      appTester(App.triggers.socialForumSession.operation.performList, bundle)
        .then(results => {
          results.length.should.be.greaterThan(1);
          done();
        })
        .catch(done);
    });
  });

});
