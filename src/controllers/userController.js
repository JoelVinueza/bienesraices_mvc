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

const register = (req,res)=>{
    console.log('registrando...');
    
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