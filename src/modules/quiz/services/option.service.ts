import { CreateQuestionDto } from './../dto/create-question-dto';
import { CreateOptionDto } from './../dto/create-option-dto';
import { OptionRepository } from './../repositories/option.repository';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Option } from "../entities/options.entity";
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
    constructor (@InjectRepository(Option) private optionRepo: OptionRepository) {

    }

    async createOption(option: CreateOptionDto, question: Question) {
        const newOption = await this.optionRepo.save({
            text: option.text,
            isCorrect: option.isCorrect
        });

        question.options = [...question.options, newOption];

        await question.save();

        return newOption;
    }
}