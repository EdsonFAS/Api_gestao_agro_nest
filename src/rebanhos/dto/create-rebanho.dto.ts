import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsEnum, IsOptional } from 'class-validator';
export class CreateRebanhoDto {

    @IsOptional()
    idRebanho?: number;
      
        @IsNotEmpty()
        @IsString()
        Tipo: string;
      
        @IsNotEmpty()
        @IsString()
        Destino: string;
     
}
