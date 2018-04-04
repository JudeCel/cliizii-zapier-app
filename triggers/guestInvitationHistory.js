const settings = require('../utils/settings');

const subscribeUrl = `${settings.baseApiUrl}/zapierSubscription`;
const guestInvitationHistoryUrl = `${settings.baseApiUrl}/guestInvitationHistory`;

const subscribeHook = (z, bundle) => {
  const data = {
    targetUrl: bundle.targetUrl,
    event: 'guest_invitation_history'
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

const getGuestInvitationHistory = (z, bundle) => { 
  const options = {
    url: `${guestInvitationHistoryUrl}/invitesHistory/getLatest`,
    method: 'GET',
  };

  return z.request(options).then((response) => [JSON.parse(response.content)]); 
};

const getGuestInvitationHistories = (z, bundle) => { 
  const options = {
    url: `${guestInvitationHistoryUrl}/list/invitesHistory`,
    method: 'GET',
  };

  return z.request(options).then((response) => JSON.parse(response.content)); 
};

module.exports = {
  key: 'guestInvitationHistory',
  noun: 'Guest Invitation History',
  display: {
    label: 'New Guest Invitation History',
    description: 'Trigger when guest invitation history changes'
  },
  operation: {
    type: 'hook',
    performSubscribe: subscribeHook,
    performUnsubscribe: unsubscribeHook,
    perform: getGuestInvitationHistory,
    performList: getGuestInvitationHistories,
    sample: {
      name: 'Sample',
      id: 1,
      guestUrl: 'http://insider.focus.com/guestInvitationHistory/test'
    }
  }
};

