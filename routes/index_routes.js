import express from 'express';

import {  createPost ,getPost} from '../contollers/index_control.js';

const router = express.Router();


router.post('/', createPost);
router.get('/',getPost)


export default router;