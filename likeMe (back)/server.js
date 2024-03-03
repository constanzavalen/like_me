import express from 'express';
import cors from 'cors';
import postsRouter from './routes/posts.routes.js'
//import { logger } from 'logger-express'; 

import dotenv from 'dotenv';
dotenv.config()
/*
const loggerOption = {
    logToFile: true, // If you need to log information to a file
    colorize: true, // enable console colors
    infoColor: "magenta", // set a color for information messages
    errorColor: "red", // set a color for error messages:
};
*/

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors());
//app.use (logger(loggerOption));

app.use('/api/v1', postsRouter);

app.listen(PORT, ()=> {
    console.log(`server on http://localhost:${PORT}`);
});
