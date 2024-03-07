import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';
import { Option } from './entities/options.entity';
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
    controllers: [QuizController, QuestionController, OptionController],
    providers: [QuizService, QuestionService, OptionService],
    imports: [TypeOrmModule.forFeature([Quiz, Question, Option])]
})
export class QuizModule {}
