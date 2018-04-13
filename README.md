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
URL: https://zapier.com/developer/builder/cli-app/3712/
EMAIL=zapiertest@mailinator.com
TEST_PASS=qwerty123

### Notes
File `.zapierapprc` contains id and key for production application. It might be overridden when you make deploy to the test environment.
