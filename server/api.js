const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minions');
const meetingsRouter = require('./meetings');
const ideasRouter = require('./ideas');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
 