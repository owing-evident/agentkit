export * from "./agentkit";
export * from "./wallet-providers";
export * from "./action-providers";
export * from "./network";
import express from 'express';

const app = express();

// Example route (replace with your existing routes)
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).send('Service is up and running');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
