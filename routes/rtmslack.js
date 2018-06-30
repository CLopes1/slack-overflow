require('dotenv').config();
const express = require('express');
const getUrl = require('get-urls')
const app = express()
const { RTMClient } = require('@slack/client');
const db = require("../models")
const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
// const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);
const { createMessageAdapter } = require('@slack/interactive-messages')

// Create the adapter using the app's verification token, read from environment variable
const slackInteractions = createMessageAdapter(process.env.SLACK_VERIFICATION_TOKEN);


//safeBrowse NPM
SafeBrowse = require('safe-browse');
var validate = new SafeBrowse.Api( process.env.GOOGLE_SAFE_BROWSE_KEY );

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Attach the adapter to the Express application as a middleware
// NOTE: The path must match the Request URL and/or Options URL configured in Slack


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

        //test channel, private
        const testId = 'GBG7RNUL8'
        

        //IF statement below listens for a link. if no link shared, no response.
        if( event.text.includes("http://"||"https://"|| "www." ||".com" || ".org" || ".net")){

            
            rtm.sendMessage('Thanks for sharing! :link: go to: http://slackoverflow2.herokuapp.com/', testId)
            .then((res) => {
                // `res` contains information about the posted message
                console.log('Message reply successfully sent: ', res.ts);
                

                const call = getUrl(event.text)

               var x

                call.forEach((i)=>
                x=i
                )

                var verifiedlink 

                    // validate.lookup(x)
                    // .on( 'success', function ( data ) {
                    //     console.log(data);
                    //     console.log("Message Succeded in Verifying");
                        
                        
                    //     //  verifiedlink = "green check"
                    // } )
                    // .on( 'error', function ( error ) {
                    //     console.log(error);
                    //     console.log('dsakfj;dsa;fkl');
                        
                    //     // verifiedlink = "yellow warning"

                    // } )
                
                // db.Resource.create( {
                //     link: x,
                //     title: 'Resource Shared via Slack',
                //     category: 'Slack Submissions'
                //   })
                //   .then(function (response) {
                //     console.log(response);
                //   })
                //   .catch(function (error) {
                //     console.log(error);
                //   })
                    
                
                // console.log(x);
                
                // console.log(getUrl(event.text));
                
                
                
            })
            // .catch(console.error);
            
        }
         
        

        
        console.log(`Message from channel: ${event.channel} : message : ${event.text}`);

            
    })
}