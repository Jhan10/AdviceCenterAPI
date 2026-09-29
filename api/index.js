import express from 'express';

//import { Translate } from '../api/Translater.js';

import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

const app = express();
app.use(express.json());

const { API_PORT } = process.env;
const corsOptions = {
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
};
const staticFilesPath = path.join(process.cwd(), 'api/public');

app.use(cors(corsOptions));
app.use('/UI',express.static(staticFilesPath));

app.get("/", (req, res) => {
  res.send(`<pre> Nothing to see here.
Checkout README.md to start.</pre>`);
});

app.listen(API_PORT, () => {
    console.log(`Server is running on port ${API_PORT} \n http://localhost:${API_PORT}/`);
});