import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducaoController } from './producao.controller';
import { ProducaoService } from './producao.service';
import { Producao } from './entities/producao.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Producao])],
    controllers: [ProducaoController],
    providers: [ProducaoService],
})
export class ProducaoModule {}