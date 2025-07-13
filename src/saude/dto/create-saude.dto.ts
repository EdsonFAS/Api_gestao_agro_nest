import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSaudeDto {
    @IsNotEmpty()
    @IsString()
    Veterinario: string;

    @IsNotEmpty()
    @IsString()
    Status: string;

    @IsNotEmpty()
    @IsString()
    Apetite: string;

    @IsNotEmpty()
    @IsNumber()
    Temperatura: number;

    @IsNotEmpty()
    @IsString()
    fk_Animal_CodigoBrinco: string;

    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    DataVerificacao: Date;
}