# cliizii-zapier-app
Cliizii zapier integration app

### Setup:
In order to run this app please read **zapier-cli** [Getting started](https://zapier.com/developer/documentation/v2/getting-started-cli/) article

### Tests:

In order to set credentials copy file `.environment.defaults` into `.environment.defaults`.
Run:
```sh
zapier test
```

### Making changes and deployment process

Please follow [the deployment deploy/README.md](./deploy/README.md) and [documentations](https://zapier.com/developer/documentation/v2/deploy/). 

### Account for test environment
This account holds Zapier application for test environment.
```
URL: https://zapier.com/developer/builder/cli-app/3712/
EMAIL=zapiertest@mailinator.com
TEST_PASS=qwerty123
```

### Notes
File `.zapierapprc` contains id and key for production application. It might be overridden when you make deploy to the test environment.


### Description of infrastructure

There are two Zapier app for different environments:
1) Cliizii (production server)
```
URL: https://zapier.com/developer/builder/cli-app/3264/build 
Owner: judyc@cliizii.com
```

2) Cliizii Test (test server)
```
URL: https://zapier.com/developer/builder/cli-app/3712/build
owner: zapiertest@mailinator.com / qwerty123
```

Invitation URLs for testing purposes:
1) production server: https://zapier.com/platform/public-invite/3264/afadc52f1c8aac79c11a994ad8000fa6/
2) test server: https://zapier.com/platform/public-invite/3712/d3be298497872ac88212d8eafcdb5e85/

#### How to test Cliizii Zapier app using TRIGGER "New Social Forum":
1) open invitation URL (see above); 
2) sign up using your email;
3) accept invitation;
4) make a new Zap:
    - TRIGGER
        - Choose a Trigger App: "Cliizii Test"
        - Trigger: New Social Forum
        - Choose Account: one of your account on the test server;
    - ACTION
        - Choose an Action App: Email
        - Action: Send Outbound Email
        - Template: fill the required fields: To, Subject and Body
5) sing in into your Cliizii account and create a new social forum;
6) check your email inbox for notification from Zapier.
