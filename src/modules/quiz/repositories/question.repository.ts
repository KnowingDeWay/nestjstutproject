import { DataSource, Repository } from 'typeorm';
import { Question } from '../entities/question.entity';

export class QuestionRepository extends Repository<Question> {
    constructor (private dataSource: DataSource) {
        super(Question, dataSource.createEntityManager());
    }
}