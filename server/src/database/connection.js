import { Sequelize } from "sequelize";
import { dbConfig } from "#config/config.js";

export const connectionSQL = new Sequelize(
    dbConfig.DB_NAME,
    dbConfig.DB_USER,
    dbConfig.DB_PASSWORD,
    {
        host: dbConfig.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
);