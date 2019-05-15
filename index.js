const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');

const app = express();
const axios = require('axios');

dotenv.config();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json())


const baseUrl = `https://api.doc.govt.nz/v2/huts`
const API_KEY = process.env.DOC_API_KEY

app.post('/api/all/', async (req, res) => {
  const response = await axios.get(`${baseUrl}`, {
    headers: {
      'x-api-key': API_KEY
    }
  })
  res.send(response.data)
});

app.post('/api/detail/', async (req, res) => {
  console.log(req.body)
  const response = await axios.get(`${baseUrl}/${+req.body.id}/detail`, {
    headers: {
      'x-api-key': API_KEY
    }
  })
    res.send(response.data)
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);