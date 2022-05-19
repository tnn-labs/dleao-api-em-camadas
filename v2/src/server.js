const express = require('express');
const usersRouter = require('./routes/users-router');

const app = express();
app.use(express.json());

app.use('/users', usersRouter);

app.listen(3333, () => console.log('Server is running on Port 3333'));
