import { PartialType } from '@nestjs/mapped-types';
import { CreateSaudeDto } from './create-saude.dto';

export class UpdateSaudeDto extends PartialType(CreateSaudeDto) {}