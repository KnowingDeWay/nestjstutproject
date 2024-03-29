import { Question } from './question.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizes')
export class Quiz extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'The quiz unique ID'
    })
    id: number;

    @Column({
        type: 'varchar'
    })
    title: string;

    @Column({
        type: 'text'
    })
    description: string;

    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean;

    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[]
}