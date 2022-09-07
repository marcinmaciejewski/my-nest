import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "noft",
  entities: ["dist/**/*.entity{ .ts,.js}"],
  synchronize: false,
  migrations: ["dist/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations_typeorm",
  migrationsRun: true
}

export default config;