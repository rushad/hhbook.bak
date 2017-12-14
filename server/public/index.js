import express from 'express';

import sms from './sms';

const publicRoute = express.Router();

//publicRoute.use(express.json());

publicRoute.use('/sms', sms);

module.exports = publicRoute;
