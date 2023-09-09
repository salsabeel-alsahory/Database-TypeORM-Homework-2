"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// const cors = require('cors');
const dataSource = require('./typeorm'); // Import your TypeORM configuration
// const routes = require('./routes');
dotenv.config();
const app = express();
// Middleware
// app.use(cors());
app.use(bodyParser.json());
// Use the TypeORM connection
dataSource.then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
});
// Routes
// app.use('/', routes);
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
