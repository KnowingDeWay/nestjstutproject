import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config';
import { runSeeders, SeederOptions } from "typeorm-extension";

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: ['dist/src/modules/**/*.entity.js'],
    migrations: ['dist/src/database/migrations/*.js'],
    seeds: ['src/database/seeds/**/*{.ts,.js}'],
    seedTracking: false,
    factories: ['src/database/factories/**/*{.ts,.js}']
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;