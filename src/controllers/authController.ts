
import AuthService from "../services/authService";

class AuthController {

    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    login =async (req: any, res: any) => {
        const { email, password } = req.body;
        const user = await this.authService.login(email, password);
        return res.json({ message: "Login successful", user });
    }

}

export default AuthController;
