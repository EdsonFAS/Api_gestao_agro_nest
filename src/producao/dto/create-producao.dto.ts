import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProducaoDto {
    @IsNotEmpty()
    @IsString()
    TipoProducao: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    Data: Date;

    @IsNotEmpty()
    @IsString()
    QuantidadeProduzida: string;

    @IsNotEmpty()
    @IsString()
    fk_Animal_CodigoBrinco: string;
}