import express from 'express';
import dotenv from 'dotenv';

import morgan from 'morgan';
import colors from 'colors';

import { logger } from './middleware/logger.js';
import connectDB from './config/db.js';
//load env
dotenv.config({ path: './config/config.env' });

//connect to db
connectDB();

//Route files
import camps from './routes/camps.js';
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/camps', camps);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server is running in ${PORT} `.yellow.bold)
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //close server & exit
  server.close(() => process.exit(1));
});
