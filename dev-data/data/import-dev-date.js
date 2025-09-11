import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fs from 'fs';
import Tour from '../../module/toursModule.js';

dotenv.config({ path: './config.env', quiet: true });

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

const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8'),
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
};

console.log(process.argv);
