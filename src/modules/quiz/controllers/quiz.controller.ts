import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { QuizService } from '../services/quiz.service';
import { Body, Controller, DefaultValuePipe, Get, HttpCode, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Validate } from 'class-validator';
import { Quiz } from '../entities/quiz.entity';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/decorator/api-pagination-response';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {

    constructor(private quizService : QuizService) {

    }

    @Get('/:id')
    @ApiOkResponse({description: 'The retreived quiz', type: Quiz})
    async getQuizById(@Param('id', ParseIntPipe) id: number) {
        return await this.quizService.getQuizById(id);
    }
    
    @Get('/')
    @ApiPaginatedResponse({
        model: Quiz,
        description: 'Gets all quizes'
    })
    async getAllQuiz(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 1
    ) : Promise<Pagination<Quiz>> {
        const paginationOptions: IPaginationOptions = {
            page,
            limit
        };

        return await this.quizService.paginate(paginationOptions);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({description: 'The quiz that was created', type: Quiz})
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}
