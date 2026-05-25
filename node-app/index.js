const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    app: 'node-app',
    endpoints: [
      { method: 'GET', path: '/',        description: 'API info and available endpoints' },
      { method: 'GET', path: '/health',   description: 'Health check' },
      { method: 'GET', path: '/success',  description: 'Returns a 200 success response' },
      { method: 'GET', path: '/error',    description: 'Returns a 500 error response' },
    ]
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/success', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Everything is working!' });
});

app.get('/error', (req, res) => {
  res.status(500).json({ status: 'error', message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
