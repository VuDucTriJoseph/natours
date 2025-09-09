import fs from 'fs';

const __dirname = import.meta.dirname;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);

const checkID = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid Id',
    });
  }
  next();
};

const checkBody = (req, res, next) => {
  //   console.log(`Tour id is: ${val}`);
  // console.log(req.body.name, req.body.price);
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'succes',
    requestAt: req.requestTime,
    result: tours.length,
    data: { tours },
  });
};

const getTour = (req, res) => {
  // console.log(req.params);
  const tour = tours.find((el) => el.id === +req.params.id);

  //   if (!tour) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'Invalid Id',
  //     });
  //   }

  res.status(200).json({
    status: 'success',
    // result: tours.length,
    data: { tour: tour },
  });
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  //   if (+req.params.id > tours.length) {
  //     return res.status(404).json({
  //       status: 'fail',
  //       message: 'Invalid Id',
  //     });
  //   }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Update tour here>',
    },
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

export {
  getAllTours,
  getTour,
  updateTour,
  createTour,
  deleteTour,
  checkID,
  checkBody,
};
