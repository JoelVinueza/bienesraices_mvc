import app from "./app.js";
import {PORT} from "./config.js";

app.listen(PORT);
console.log("Server is on PORT:", app.get("port"));
