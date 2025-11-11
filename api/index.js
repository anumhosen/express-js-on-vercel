const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel!' });
});

app.get('/hello', (req, res) => {
    res.send(`Hello ${req.query.name || 'World'}!`);
});

app.post('/echo', (req, res) => {
    res.json({ echoed: req.body });
});

// Export the app instance for Vercel to mount
module.exports = app;
