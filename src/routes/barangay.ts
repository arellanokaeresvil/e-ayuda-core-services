import express from "express";
import barangayController from "../containers/barangayContainer";

const router = express.Router();

router.get('/', barangayController.index);
router.post('/', barangayController.store);
router.get('/options', barangayController.getOptions); 


router.get('/:id', barangayController.show);
router.put('/:id', barangayController.update);
router.delete('/:id', barangayController.destroy);
router.get('/restore/:id', barangayController.restore); 
export default router;
