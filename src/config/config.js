import { config } from "dotenv"
config();

export const PORT = process.env.PORT || 4000;

//db
export const DBNAME = process.env.DBNAME || 'bienesraices_node_mvc';
export const DBUSER = process.env.DBUSER || 'root';
export const DBPASSWORD = process.env.DBPASSWORD || '1234';
export const HOST = process.env.HOST || 'localhost';
export const DBPORT = process.env.DBPORT || 3306;
export const DBDIALECT = process.env.DBDIALECT || 'mysql';
