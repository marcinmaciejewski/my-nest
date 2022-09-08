require('dotenv').config();

import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ["dist/**/*.entity{ .ts,.js}"],
  synchronize: false,
  migrations: ["src/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations_typeorm",
  migrationsRun: true,
};

const dataSource = new DataSource(config);
export default dataSource;