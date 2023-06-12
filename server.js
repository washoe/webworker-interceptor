const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Serve the index.html file
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', (req, res) => {
  if (
    req.header('x-custom')
  ) {
    const jsonData = { message: 'This is a JSON response', xCustomHeaderValue: req.header('x-custom') };
    res.json(jsonData);
  } else {
    res.status(400).send('Bad Request');
  }
});

// Serve other files in the usual way
app.use(express.static(__dirname));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
