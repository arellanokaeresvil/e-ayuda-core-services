import UserRepository from "../repositories/userRepository";
import UserController from "../controllers/userController";
import UserService from "../services/userService";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userRepository, userService);


export default userController;