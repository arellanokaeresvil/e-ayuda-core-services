import BarangayController from "../controllers/barangayController";
import BarangayRepository from "../repositories/barangayRepository";


const barangayRepository = new BarangayRepository();
const barangayController = new BarangayController(barangayRepository);


export default barangayController
