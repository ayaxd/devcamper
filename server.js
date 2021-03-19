import express from 'express';
import dotenv from 'dotenv';

//load env
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is running on ${PORT} `));
