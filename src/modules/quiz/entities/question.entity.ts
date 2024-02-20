import { Quiz } from './quiz.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('questions')
export class Question extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar'
    })
    question: string;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz;
}