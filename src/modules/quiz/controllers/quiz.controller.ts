import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizService } from '../services/quiz.service';
import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Validate } from 'class-validator';

@Controller('quiz')
export class QuizController {

    constructor(private quizService : QuizService) {

    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number) {
        return await this.quizService.getQuizById(id);
    }
    
    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}
