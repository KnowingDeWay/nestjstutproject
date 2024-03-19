import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import 'dotenv/config';


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configSevice: ConfigService): Promise<TypeOrmModuleOptions> => {
    return {
      type: "postgres",
      host: configSevice.get("DB_HOST"),
      port: configSevice.get<number>("DB_PORT"),
      database: configSevice.get("DB_NAME"),
      username: configSevice.get("DB_USERNAME"),
      password: configSevice.get("DB_PASSWORD"),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '../migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci'
      },
      synchronize: false,
      logging: true
    };
  }
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '../database/migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci'
  },
  logging: true
}