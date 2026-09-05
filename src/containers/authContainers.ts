import AuthService from "../services/authService";
import AuthController from "../controllers/authController";

const authService = new AuthService();
const authController = new AuthController(authService);

export default authController;
