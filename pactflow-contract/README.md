# 16-bits-js
JS code


# Pactflow

https://docs.pactflow.io/docs/workshops/introduction/learning

# Learn first
https://katacoda.com/pact/scenarios/pactflow-can-i-deploy-js

## Steps
```
npm i
```
TODO
```
npm run test:consumer
```
To see the results
```
cat pacts/16-bits-consumer-16-bits-provider.json
```

Export the user and key

Publish the result

```npm
npm run publish
```

https://16-bits.pactflow.io/pacts/provider/16-bits-provider/consumer/16-bits-consumer/latest

Can I deploy?
```
npm run can-deploy:consumer
```
Nope Computer says no ¯\_(ツ)_/¯, then let's make it possible

```npm
npm run test:provider
```

Now we've created our provider and confirmed it can meet the needs of its consumers, we can deploy it to production!

As with the consumer, we can first check if this is safe to do: 
```
npm run can-deploy:provider
```

Computer says yes \o/ 

Deploy the provider: 
```
npm run deploy:provider
```

Again
Now that the provider is in production, and has satisfied the needs of the consumer, we can once again check if it's safe to release the consumer by running 
```
npm run can-deploy:consumer
```

Now we may release our consumer application to production: 
```
npm run deploy:consumer
```

Adding new scenarios
Try adding a new expectation on the provider by updating the contract:

 ```
 npm run test:consumer
 npm run publish
 npm run can-deploy:consumer
 ```


