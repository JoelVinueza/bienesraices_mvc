import { check, validationResult } from "express-validator";
import User from "../models/User.js"

const loginForm = (req, res) => {
    res.render('auth/login',{
        page: 'Iniciar Sesión',
    });
};

const registerForm = (req, res) => {
    res.render('auth/register',{
        page: 'Crear Cuenta',
    });
};

const register = async(req,res)=>{

    const{ name, email, password } = req.body;

    await check('name').notEmpty().withMessage('El nombre no puede ir vacio...').run(req);
    await check('email').isEmail().withMessage('Eso no parece un email...').run(req);
    await check('password').isLength({min: 6}).withMessage('La contraseña debe ser almenos de 6 caracteres...').run(req);
    await check('password_conf').equals('password').withMessage('La contraseña no coincide...').run(req);

    let result = validationResult(req);

    //return res.json(result.array());
    if(!result.isEmpty()){
        return res.render('auth/register',{
            page: 'Crear Cuenta',
            errors: result.array(),
            user: {
                name: req.body.name,
                email: req.body.email
            }
        });
    }

    const userExist = await User.findOne({
        where:{email}
    });

    if(userExist){
        return res.render('auth/register',{
            page: 'Crear Cuenta',
            errors: [{msg:'El email ya se encuentra en uso...'}],
            user: {
                name: req.body.name,
                email: req.body.email
            }
        });
    }

    const user = await User.create(req.body);
    res.json(user);
};

const forgotPasswordForm = (req, res) => {
    res.render('auth/forgotPassword',{
        page: 'Recupera tu Contraseña',
    });
};

export{
    loginForm,
    registerForm,
    register,
    forgotPasswordForm,
};