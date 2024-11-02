import { Sequelize } from "sequelize";
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_DIALECT} from './config.js';

const db = new Sequelize(DB_NAME, DB_USER , DB_PASSWORD,{
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    //operatorsAliases: false
});

export default db;