import express from "express";
import mainRoutes from "./routes/index.routes.js";

const app = express();

app.set("port", process.env.PORT || 4000);
app.set( 'view engine', 'pug');
app.set('views', './views');

app.use('/', mainRoutes);

export default app;