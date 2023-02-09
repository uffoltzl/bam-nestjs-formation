import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.API_DB_HOST,
  username: process.env.API_DB_USERNAME,
  password: process.env.API_DB_PASSWORD,
  database: process.env.API_DB_NAME,
  port: Number(process.env.API_DB_PORT),
  migrationsRun: false,
  entities: ['dist/**/*.dao.js'],
  migrations: ['dist/db/migrations/*.js'],
  logging: true,
};

const dataSource = new DataSource({ ...dataSourceOptions });
export default dataSource;
