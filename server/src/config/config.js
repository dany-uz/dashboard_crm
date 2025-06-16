import { config } from "dotenv";

config();

const {
    PORT
} = process.env;

export { PORT };