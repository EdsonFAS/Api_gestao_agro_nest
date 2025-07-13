import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePastagemDto {
    @IsNotEmpty()
    @IsNumber()
    AreaPastagem: number;

    @IsNotEmpty()
    @IsString()
    LocalizacaoPastagem: string;

    @IsNotEmpty()
    @IsNumber()
    Periodo: number;

    @IsNotEmpty()
    @IsString()
    fk_Animal_CodigoBrinco: string;
}