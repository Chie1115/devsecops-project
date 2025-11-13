// Import necessary libraries
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Create an instance of an Express application
const app = express();
const PORT = 3001;

// --- Swagger/OpenAPI Definition ---
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple API for devsecops-project',
      version: '1.0.0',
      description: 'A simple Express API to demonstrate automated documentation',
    },
    servers: [
      {
        url: `http://localhost:3001`, // We use the container's internal port here
        description: 'Development server (inside container )',
      },
    ],
  },
  // Path to the API docs. This tells swagger-jsdoc where to find API documentation comments.
  apis: ['./server.js'],
};

// Initialize swagger-jsdoc -> returns validated OpenAPI spec in JSON format
const openapiSpecification = swaggerJsdoc(options);

// --- API Routes ---

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a hello message
 *     description: This is the main endpoint of the API which returns a simple greeting.
 *     responses:
 *       200:
 *         description: A successful response with a hello message.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Hello from the API!
 */
app.get('/', (req, res) => {
  res.send('Hello from the API!');
});

// --- Swagger UI Setup ---
// This route will serve the auto-generated API documentation.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));


// Start the server
app.listen(PORT, () => {
  console.log(`API server is listening on port ${PORT}`);
  console.log(`API documentation available at http://localhost:${PORT}/api-docs` );
});


