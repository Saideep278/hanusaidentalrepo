import express from 'express';

import {  createAppo ,getAppo} from '../contollers/appoint_control.js';

const router = express.Router();


router.post('/', createAppo);
router.get('/',getAppo)


export default router;