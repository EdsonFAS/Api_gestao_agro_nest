import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PastagemController } from './pastagem.controller';
import { PastagemService } from './pastagem.service';
import { Pastagem } from './entities/pastagem.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Pastagem])],
    controllers: [PastagemController],
    providers: [PastagemService],
})
export class PastagemModule {}