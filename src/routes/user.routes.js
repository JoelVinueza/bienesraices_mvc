import { Router } from "express";
import { loginForm,
    registerForm,
    forgotPasswordForm,
} from "../controllers/userController.js"

const router = Router();

router.get('/login', loginForm);
router.get('/register', registerForm);
router.get('/forgotPassword', forgotPasswordForm);


export default router;