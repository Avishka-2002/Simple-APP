const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Environment variables
const PORT = process.env.PORT || 8080;

// Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(morgan('combined')); // Request logging
app.use(express.json()); // Body parsing middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello from the Container! 🚀');
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port: ${PORT}`);
});