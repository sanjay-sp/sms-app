const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post('/send-message', (req, res) => {
    res.send('Message Sent');
})

app.listen('4000', console.log('Server running at port 4000...'))