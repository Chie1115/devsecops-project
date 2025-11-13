// Import the Express library
const express = require('express');
// Create an instance of an Express application
const app = express();
// Define the port the server will run on
const PORT = 3001;

// Define a route handler for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

// Start the server and listen for connections on the specified port
app.listen(PORT, () => {
  console.log(`API server is listening on port ${PORT}`);
});

