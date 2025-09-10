import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env', quiet: true });

import app from './app.js';
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATA_PASS);
// console.log(DB);

mongoose
  .connect(DB, {
    dbName: 'natours',
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // console.log(con.connections);
    console.log('DB conection successful!');
  });
// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
