const settings = require('../utils/settings');

const subscribeUrl = `${settings.baseApiUrl}/zapierSubscription`;
const sessionsUrl = `${settings.baseApiUrl}/session`;

const subscribeHook = (z, bundle) => {
  const data = {
    targetUrl: bundle.targetUrl,
    event: 'social_forum_created'
  };

  const options = {
    url: subscribeUrl,
    method: 'POST',
    body: data
  };

  return z.request(options).then((response) => JSON.parse(response.content).subscription);
};

const unsubscribeHook = (z, bundle) => {
  const hookId = bundle.subscribeData.id;

  const options = {
    url: `${subscribeUrl}/${hookId}`,
    method: 'DELETE',
  };

  return z.request(options).then((response) => JSON.parse(response.content));
};

const getSocialForumSession = (z, bundle) => {
  const options = {
    url: `${sessionsUrl}/soccialForum/getLatestSocialForumSession`,
    method: 'GET',
  };

  return z.request(options).then((response) => [JSON.parse(response.content)]); 
};

const getSocialForumSessions = (z, bundle) => {
  const options = {
    url: `${sessionsUrl}/list/soccialForum`,
    method: 'GET',
  };

  return z.request(options).then((response) => JSON.parse(response.content)); 
};

module.exports = {
  key: 'socialForumSession',
  noun: 'Social Forum Session',
  display: {
    label: 'New Social Forum Session',
    description: 'Trigger when you create a new social forum session'
  },
  operation: {
    type: 'hook',
    performSubscribe: subscribeHook,
    performUnsubscribe: unsubscribeHook,
    perform: getSocialForumSession,
    performList: getSocialForumSessions,
    sample: {
      name: 'Sample',
      id: 1,
      guestUrl: 'http://insider.focus.com/session/test'
    }
  }
};

