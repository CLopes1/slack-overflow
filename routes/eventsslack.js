// const http = require('http');


// Initialize an Express application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// You must use a body parser for JSON before mounting the adapter

module.exports = function(app){
    app.use(bodyParser.json());
    
    // Initialize using verification token from environment variables
    const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
    const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);
    // const port = process.env.PORT || 3000;
    
    // Mount the event handler on a route
    // NOTE: you must mount to a path that matches the Request URL that was configured earlier
    app.use('/slack/events', slackEvents.expressMiddleware());
    
    // Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
    slackEvents.on('message', (event)=> {
        console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
    });
    
    // Handle errors (see `errorCodes` export)
    slackEvents.on('error', console.error);
    
    // Start the express application
    // http.createServer(app).listen(port, () => {
        //   console.log(`server listening on port ${port}`);
        // });
    }