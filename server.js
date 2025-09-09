import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env', quiet: true });

import app from './app.js';
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATA_PASS);
// console.log(DB);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
