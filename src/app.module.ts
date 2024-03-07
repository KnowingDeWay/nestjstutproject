import { ConfigService } from '@nestjs/config';
import { QuizModule } from './modules/quiz/quiz.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig, typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(dataSourceOptions), ConfigModule.forRoot({
    isGlobal: true
  }), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
