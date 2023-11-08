# Google Cloud Functions for Firebase

#### Run emulators

```
npm run emulators
```

#### Switch to local environment variables

```
firebase functions:config:get > .runtimeconfig.json
```

#### Set a global environment variable

```
firebase functions:config:set someservice.key="THE API KEY"
```

#### View environment variables

```
firebase functions:config:get
```

#### Call a locally running function from CLI

```
curl -X POST -H "Content-Type:application/json"-H "X-MyHeader: 123" http://localhost:5001/futurejohn/us-central1/functionName -d "{'text':'something'}"
```

```
curl -X POST -H "Content-Type:application/json"-H http://localhost:5001/futurejohn/us-central1/{function-name}
```
