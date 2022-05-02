var http = require('https');
module.exports = function (context, myQueueItem) {
    // "myQueueItem" is the name defined in the function.json to handle queue item that triggered the function

    body = JSON.stringify(myQueueItem);
    
    const options = {
        hostname: '***HIDDEN_DATA***.azure-api.net',
        port: 443,
        path: '/external/fillup',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': body.length,
            'Ocp-Apim-Subscription-Key': '***HIDDEN_DATA***' // There's probably a better way to pass this key ;)
        }
    }

    var response = '';
    const request = http.request(options, (res) => {
        context.log(`statusCode: ${res.statusCode}`)

        res.on('data', (d) => {
            response += d;
        })

        res.on('end', (d) => {
            context.res = {
                body: response
            }
            context.done();
        })
    })

    request.on('error', (error) => {
        context.log(error.response.data)
    })

    request.write(body);
    request.end();
    context.log('Queue trigger function processed a message.');
};