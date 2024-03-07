import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigService } from "@nestjs/config";
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js']
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;