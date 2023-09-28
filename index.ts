import express from 'express';
import { createConnection } from 'typeorm';
import authRoutes from './routes/authRoutes';
import { validateRegistration } from './middleware/registerValidation';

const app = express();
app.use(express.json());

// Set up database connection
createConnection().then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Database connection error:', error);
});

// Use validation middleware
app.use(validateRegistration);
// Use routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
