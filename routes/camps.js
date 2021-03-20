import express from 'express';
import {
  getCamps,
  createCamp,
  getCampById,
  updateCamp,
  deleteCamp,
} from '../controller/camps.js';

const router = express.Router();

router.route('/').get(getCamps).post(createCamp);

router.route('/:id').get(getCampById).put(updateCamp).delete(deleteCamp);

export default router;
