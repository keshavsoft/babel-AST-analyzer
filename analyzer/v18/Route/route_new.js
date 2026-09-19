import express from 'express';

import { router as routerFromdoctors } from './doctors/end-points.js';

const router = express.Router();

export { router };