import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizRepository } from '../repositories/quiz.repository';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository) {

    }

    getAllQuiz() {
        return [1, 2, 3];
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            where: {id: id},
            relations: {questions: true}
        });
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz);
    }
}