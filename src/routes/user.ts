import express from 'express';
import UserController from '../containers/userContainers';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authMiddleware)

router.get('/', UserController.index)
router.post('/', UserController.store)
router.get('/:id', UserController.show)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.destroy)
router.get('/restore/:id', UserController.restore)

export default router;