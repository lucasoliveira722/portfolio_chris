
import express from 'express';
import objectController from '../controllers/object.controller.js';

const router = express.Router();

router.get('/', objectController.getAllObjects);
router.get('/:id', objectController.getObjectById);
router.post('/', objectController.createObject);
router.put('/:id', objectController.updateObject);
router.delete('/:id', objectController.deleteObject);

export default router;
