require('dotenv').config();
const express = require('express');
const getUrl = require('get-urls')
const app = express()
const { RTMClient } = require('@slack/client');
const db = require("../models")
const { createMessageAdapter } = require('@slack/interactive-messages')

// Create the adapter using the app's verification token, read from environment variable
const slackInteractions = createMessageAdapter(process.env.SLACK_VERIFICATION_TOKEN);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const token = process.env.SLACK_API_TOKEN || '';
if (!token) { console.log('You must specify a token to use this example'); process.exitCode = 1; return; }



module.exports = function (app) {
    
    app.use('/slack/actions', slackInteractions.expressMiddleware());


    // Initialize an RTM API client
    
    const rtm = new RTMClient(token);
    // // Start the connection to the platform
    rtm.start();
    
    rtm.on('message', (event) => {
        //conversationId is specific to #resources channel in UCI workspace.
        const conversationId = 'C7VMYGXME'

        //test channel, private sandbox for testing
        const testId = 'GBG7RNUL8'
        

        //IF statement below listens for a link. if no link shared, no response.
        if( event.text.includes("http://"||"https://"|| "www." ||".com" || ".org" || ".net")){

            
            rtm.sendMessage('Thanks for sharing! :link: go to: http://slackoverflow2.herokuapp.com/', conversationId)
            .then((res) => {
                // `res` contains information about the posted message
                console.log('Message reply successfully sent: ', res.ts);
                
                // function getURL parses through a string and pushes the URL to a Set() function to extract later.
                const call = getUrl(event.text)

               var x

                call.forEach((i)=>
                x=i
                )
                // Grabs the link that was submitted, renders an object to be posted to DB.
                db.Resource.create( {
                    link: x,
                    title: 'Resource Shared via Slack',
                    category: 'Slack Submissions'
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
                    
                // validates what link was extracted.
                console.log(x + "Link has been added to DB");
                
                // console.log(getUrl(event.text));
                
                
                
            })
            .catch(console.error);
            
        }
         
        

        // tester for identifying what channel the message is coming from, so that slack bot replies to correct channel.
        console.log(`Message from channel: ${event.channel} : message : ${event.text}`);

            
    })
}