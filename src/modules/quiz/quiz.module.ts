import { QuestionService } from './services/question.service';
import { QuestionController } from './controllers/question.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizService } from './services/quiz.service';
import { QuizController } from './controllers/quiz.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';

@Module({
    controllers: [QuizController, QuestionController],
    providers: [QuizService, QuestionService],
    imports: [TypeOrmModule.forFeature([Quiz, Question])]
})
export class QuizModule {}
