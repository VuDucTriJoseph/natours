import express from 'express';

function getAllUsers(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'i will build this on the time going on',
  });
}

function createUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'i will build this on the time going on',
  });
}

function getUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'i will build this on the time going on',
  });
}

function updateUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'i will build this on the time going on',
  });
}

function deleteUser(req, res) {
  res.status(500).json({
    status: 'fail',
    message: 'i will build this on the time going on',
  });
}

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default userRouter;
