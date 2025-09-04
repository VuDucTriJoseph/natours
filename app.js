import express from 'express';
import fs from 'fs';

const app = express();

const port = 3000;

app.use(express.json());
// app.get("/api/v1/tours",(req,res)=>{
//     res.status(200).json({mess:"hello from server side",app:"mature"});
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'succes',
    result: tours.length,
    data: { tours },
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    },
  );
  // res.send('done');
});

app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
