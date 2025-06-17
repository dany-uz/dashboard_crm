import { config as configDotenv } from "dotenv";

configDotenv();

export const IS_DEV = process.env.IS_DEV === 'true';
export const PORT = process.env.PORT;

export const dbConfig = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST
}

export const dbTables = {
    DBT_ACCOUNTS: process.env.DBT_ACCOUNTS,
    DBT_LEADS: process.env.DBT_LEADS,
    DBT_LEADS_CONTACTS: process.env.DBT_LEADS_CONTACTS,
    DBT_LEADS_LOGS: process.env.DBT_LEADS_LOGS,
    DBT_USERS: process.env.DBT_USERS
}