
import AuthService from "../services/authService";
import ApiResponse from "../utils/response";

class AuthController {

    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    login = async (req: any, res: any) => {
        const { email, password } = req.body;
        const user = await this.authService.login(email, password);
      return ApiResponse.success(res, user, 'User logged in successfully');
    }

    logout = async (req: any, res: any) => {
        // Implement logout logic here for cookie-based authentication
        return ApiResponse.success(res, null, 'User logged out successfully');
    }

}

export default AuthController;
