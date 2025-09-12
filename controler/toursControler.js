// import fs from 'fs';

import Tour from '../module/toursModule.js';

// const __dirname = import.meta.dirname;

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
// );

// const checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);
//   if (+req.params.id > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid Id',
//     });
//   }
//   next();
// };

// const checkBody = (req, res, next) => {
//   //   console.log(`Tour id is: ${val}`);
//   // console.log(req.body.name, req.body.price);
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price',
//     });
//   }
//   next();
// };

const getAllTours = async (req, res) => {
  // res.status(200).json({
  //   status: 'succes',
  //   requestAt: req.requestTime,
  //   result: tours.length,
  //   data: { tours },
  // });
  try {
    // BUILD QUERY
    //filltering
    // console.log(req.query);
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);
    // console.log(req.query, queryObj);

    //advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // console.log(JSON.parse(queryStr));

    const query = Tour.find(JSON.parse(queryStr));

    // const query =  Tour.find()
    //   .where('duration')
    //   .equals(5)
    //   .where('difficulty')
    //   .equals('easy');

    // EXECUTE QUERY
    const tours = await query;

    //SEND RESPONSE

    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    //Tour.findOne({ _id:req.params.id })
    res.status(200).json({
      status: 'success',
      data: { tour },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
  // console.log(req.params);
  // const tour = tours.find((el) => el.id === +req.params.id);
  // //   if (!tour) {
  // //     return res.status(404).json({
  // //       status: 'fail',
  // //       message: 'Invalid Id',
  // //     });
  // //   }
  // res.status(200).json({
  //   status: 'success',
  //   // result: tours.length,
  //   data: { tour: tour },
  // });
};

const createTour = async (req, res) => {
  // console.log(req.body);
  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tours),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tour: newTour,
  //       },
  //     });
  //   },
  // );
  // res.send('done');

  // use mongoDB
  // const newTour = new Tour({})
  // newTour.save()
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }

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

const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export { getAllTours, getTour, updateTour, createTour, deleteTour };
