import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsEnum, IsOptional } from 'class-validator';

export class CreateAnimalDto {
    @IsNotEmpty()
    @IsString()
    CodigoBrinco: string;
  
    @IsNotEmpty()
    @IsString()
    Raca: string;
  
    @IsNotEmpty()
    @IsNumber({}, { message: 'Peso deve ser um número' })
    Peso: number;
  
    @IsNotEmpty()
    @IsEnum(['M', 'F'], { message: 'Sexo deve ser M ou F' })
    Sexo: 'M' | 'F';
  
    @IsNotEmpty()
    @IsNumber({}, { message: 'Idade deve ser um número' })
    Idade: number;

    @IsOptional()
    @IsString()
    Cor?: string;

       @IsOptional()
    @IsString()
    Nome?: string;

           @IsOptional()
    @IsString()
    IdPaterno?: string;

          @IsOptional()
    @IsString()
    IdMatriz:string;
}