import express from 'express';
import {
  getAllTours,
  getTour,
  updateTour,
  createTour,
  deleteTour,
  checkID,
  checkBody,
} from './../controler/toursControler.js';

const tourRouter = express.Router();

tourRouter.param('id', checkID);

tourRouter.route('/').get(getAllTours).post(checkBody, createTour);

tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

export default tourRouter;
