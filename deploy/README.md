# Deploy setup (unix) 

* Authenticate using credentials for Zapier.
* You need to be added to https://zapier.com/ as collaborator, contact team members, project manager or client for this.

## (Requirements)[https://github.com/zapier/zapier-platform-cli#requirements]
* you need to have installed specific version of Node.js
* you need to have installed Zapier CLI 

* authenticate to Zapier

```
zapier login
```

* you will be asked for credentials (or you might be asked to override existing credentials if you already logged in before)

* run tests

```
zapier test

```

* link the application to Zapier account
```
zapier link
```

# Deploy process.

## Klzii Dashboard.
You can see app here: (link)[https://zapier.com/developer/builder/cli-app/3264/build]

* To deploy in test environment for QA

```
 cd YourCliiziiZapierAppPath/

./deploy/deploy_latest_test
```

* To deploy in production environment for Client

```
 ./deploy/deploy_latest_production
```

Notes:

* To see all the application you have access to:
```
zapier apps

All apps listed below.

┌─────────┬─────────────┬─────────────────────┬────────┐
│ Title   │ Unique Slug │ Timestamp           │ Linked │
├─────────┼─────────────┼─────────────────────┼────────┤
│ SR_test │ App3378     │ 2018-03-28T10:35:41 │ ✔      │
│ Cliizii │ App3264     │ 2018-03-22T06:36:04 │        │
└─────────┴─────────────┴─────────────────────┴────────┘
```

* To see recent logs of latest deployed application:
```
 cd YourCliiziiZapierAppPath/

 zapier logs
```
