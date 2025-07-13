import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsEnum, IsDate, IsOptional } from 'class-validator';

export class CreateAlimentacaoDto {
    @IsOptional()
    @IsNumber()
    IdAlimentacao?: number; 
      
        @IsNotEmpty()
        @IsString()
        Nome: string;
      
        @IsNotEmpty()
        @IsString()
        Fornecedor: string;
      
     
        @IsNotEmpty()
        @IsNumber({}, { message: 'Quantidade deve ser um número' })
        QuantidadeEstoque: number;

        @IsDate()
        @Type(() => Date)  // Garante que será tratado como data
        @IsNotEmpty()
        DataValidade: Date;

        @IsDate()
        @Type(() => Date)  // Garante que será tratado como data
        @IsNotEmpty()
        DataEntrega: Date;
}
