import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizRepository } from '../repositories/quiz.repository';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from '../entities/quiz.entity';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository) {

    }

    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository.createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .leftJoinAndSelect('qt.options', 'o')
            .getMany();
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            where: {id: id},
            relations: {questions: {
                options: true
            }}
        });
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz);
    }
}