//Dependencies(require statements)
const express = require('express');
const bodyParser = require('body-parser');
const Twilio = require('twilio');
const app = express();
const accountSid = 'ACf326efb6b2a556febfd6c30cb14d3286'; 
const authToken = 'e962eb1ccb840055789d093d328e6572';  
const twilioClient = new Twilio(accountSid, authToken);
const myNumber = '+19519702640';


//Port
const port = process.env.PORT || 3000;

//Define express middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


//Define routes
app.post('/send', (req, res) => {

    //Create message
    const message = `
    Hi Keaton!

    ${req.body.firstName} would like to set up an appointment!

    Reply YES or NO to accept or deny the appointment.
    `;

    //Send message
    twilioClient
        .messages
        .create({
        body: message,
        to: myNumber,  // Text this number
        from: '+14422449957' // From a valid Twilio number
    })
    .then(function(message){
        res.send('ok');
    });
});

app.post('/twilioReply')
    twilioClient
        .messages
        .create({
        body: 'GOT REPLY',
        to: myNumber,  // Text this number
        from: '+14422449957' // From a valid Twilio number
    })
    .then(function(message){
        res.send('ok');
    });

// Start server
app.listen(port, function(){
    console.log(`Server is listening on port ${port}`);
});





