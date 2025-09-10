import express from 'express';
import {
  getAllTours,
  getTour,
  updateTour,
  createTour,
  deleteTour,
} from './../controler/toursControler.js';

const tourRouter = express.Router();

// tourRouter.param('id', checkID);

tourRouter.route('/').get(getAllTours).post(createTour);

tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

export default tourRouter;
