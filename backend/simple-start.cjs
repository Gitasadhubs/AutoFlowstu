// Simple Node.js server for debugging Railway deployment
const express = require('express');
const app = express();

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    env: {
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
      DATABASE_URL_SET: !!process.env.DATABASE_URL,
      BACKEND_URL: process.env.BACKEND_URL
    }
  });
});

app.get('/', (req, res) => {
  res.send('Simple backend is running 🚀');
});

const port = parseInt(process.env.PORT || '3000', 10);
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Simple server running on port ${port}`);
  console.log(`🔗 Health check: http://0.0.0.0:${port}/api/health`);
  console.log('Environment:', process.env.NODE_ENV);
});