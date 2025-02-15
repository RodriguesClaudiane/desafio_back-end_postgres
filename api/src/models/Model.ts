import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

export default new Sequelize(
    process.env.DATABASE_NAME ?? 'postgres',
    process.env.DATABASE_USER ?? 'postgres',
    process.env.DATABASE_PASSWORD ?? 'postgres',
    {
        host: process.env.DATABASE_HOST ?? 'localhost',
        port: Number(process.env.DATABASE_PORT) ?? 5432,
        dialect: 'postgres',
        logging: false
    },
);