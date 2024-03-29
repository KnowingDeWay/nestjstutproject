import { Quiz } from './quiz.entity';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from './options.entity';

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

    @OneToMany(() => Option, (option) => option.question)
    options: Option[]
}