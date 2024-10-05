import {Router} from "express";

const router = Router();

router.get('/', (req, res) => {
 res.json({ msg: ' Hola mundo '})
});

router.get('/sobreMi', (req, res) => {
    res.send(' Info sobre mi ')
});

export default router;