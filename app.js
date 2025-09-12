import express from 'express';

import morgan from 'morgan';
import qs from 'qs';

import tourRouter from './routes/tourRouters.js';
import userRouter from './routes/userRouters.js';

const app = express();
// 1. middleware
if (process.env.NODE_ENV === 'evelopment') {
  app.use(morgan('dev'));
}
app.set('query parser', (str) => qs.parse(str));
app.use(express.json());
app.use(express.static('./public'));

// app.use((req, res, next) => {
//   console.log('Hello from middleware');
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// app.route('/api/v1/users').get();

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

export default app;
