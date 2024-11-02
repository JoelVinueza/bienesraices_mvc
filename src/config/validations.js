import db from "./dbconfig.js";

//db conection validation
try {
    await db.authenticate();
    db.sync();
    console.log('DataBase Conection Successful');
    
} catch (error) {
    console.log(error);
    
};