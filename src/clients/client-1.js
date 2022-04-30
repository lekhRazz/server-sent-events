const express = require('express');
var EventSource = require("eventsource");

const app = express();
const PORT = 4000;

const events = new EventSource('http://localhost:3000/api/stream');

events.onmessage = (event) => {
  const parsedData = JSON.parse(event.data);

  console.log("Event data", parsedData)
};

events.addEventListener('post', payload => {
  console.log("payload", payload)
})

app.listen(PORT, () => {
  console.log(`Facts Events service listening at http://localhost:${PORT}`)
})