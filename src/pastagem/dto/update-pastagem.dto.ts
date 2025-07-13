import { PartialType } from '@nestjs/mapped-types';
import { CreatePastagemDto } from './create-pastagem.dto';

export class UpdatePastagemDto extends PartialType(CreatePastagemDto) {}