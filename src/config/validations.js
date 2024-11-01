import db from "./dbconfig.js";

//db conection validation
try {
    await db.authenticate();
    console.log('DataBase Conection Successful');
    
} catch (error) {
    console.log(error);
    
};