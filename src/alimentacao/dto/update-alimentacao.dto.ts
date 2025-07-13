import { PartialType } from '@nestjs/mapped-types';
import { CreateAlimentacaoDto } from './create-alimentacao.dto';

export class UpdateAlimentacaoDto extends PartialType(CreateAlimentacaoDto) {}
