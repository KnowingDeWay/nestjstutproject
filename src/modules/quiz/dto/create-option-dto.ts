import { IsNotEmpty, Length } from "class-validator";
import { Option } from "../entities/options.entity";

export class CreateOptionDto {

    @IsNotEmpty()
    @Length(2, 255)
    text: string;

    @IsNotEmpty()
    questionId: number;

    @IsNotEmpty()
    isCorrect: boolean;
}