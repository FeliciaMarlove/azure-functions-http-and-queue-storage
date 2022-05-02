module.exports = async function (context, req) {
    context.res = {
        body: responseMessage
    };

    // You would probably do something with your body before sending it to the queue :)
    // Otherwise you might as well post directly to the queue I guess!

    // Data passed to the queue storage ("outputQueueItem" is the name defined in the function.json file to define the data passed to the queue):
    context.bindings.outputQueueItem = req.body;

    context.log('JavaScript HTTP trigger function processed a request.');
}