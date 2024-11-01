import { Sequelize } from "sequelize";
import { HOST, DBPORT, DBNAME, DBUSER, DBPASSWORD, DBDIALECT} from './config.js';

const db = new Sequelize(DBNAME, DBUSER , DBPASSWORD,{
    host: HOST,
    port: DBPORT,
    dialect: DBDIALECT,
    define: {
        timestamps: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;