import { Router } from "express";
import { loginForm,
    registerForm,
    register,
    forgotPasswordForm,
} from "../controllers/userController.js"

const router = Router();

router.get('/login', loginForm);

router.get('/register', registerForm);
router.post('/register', register);

router.get('/forgotPassword', forgotPasswordForm);


export default router;