import { config } from "dotenv"
config({path: '.env'});

export const PORT = process.env.PORT;

//db
export const DB_NAME = process.env.DBNAME;
export const DB_USER = process.env.DBUSER;
export const DB_PASSWORD = process.env.DBPASSWORD;
export const DB_HOST = process.env.DBHOST;
export const DB_PORT = process.env.DBPORT;
export const DB_DIALECT = process.env.DBDIALECT;
