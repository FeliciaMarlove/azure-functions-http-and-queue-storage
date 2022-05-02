# azure-functions-http-and-queue-storage
Azure functions with HTTP trigger, queue storage trigger and making an HTTP request to another service. Written in JavaScript.
## HttpTrigger1
Triggered by an incoming http-post request and saves the body as a message in a queue (in Azure queue storage).
## QueueTrigger1
Triggered by new messages in a queue storage and makes a post request to a backend application through Azure APIM.
