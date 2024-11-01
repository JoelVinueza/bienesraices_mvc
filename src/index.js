import app from "./app.js";
import { PORT } from "./config/config.js";
import "./config/validations.js";

app.listen(PORT);
console.log("Server is on PORT:", app.get("port"));
