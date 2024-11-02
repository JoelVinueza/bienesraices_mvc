import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.set("port", process.env.PORT || 4000);

app.set( 'view engine', 'pug');
app.set('views', './src/views');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

app.use('/auth', userRoutes);

export default app;