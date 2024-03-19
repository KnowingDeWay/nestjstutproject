import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizRepository } from '../repositories/quiz.repository';
import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Quiz } from '../entities/quiz.entity';
import { Question } from '../entities/question.entity';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Db } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository) {

    }

    @Get('/')
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

    async paginate(options: IPaginationOptions): Promise<Pagination<Quiz>> {
        const qr = this.quizRepository.createQueryBuilder('q');
        qr.orderBy('q.id', 'DESC');

        return paginate<Quiz>(qr, options);
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz);
    }
}