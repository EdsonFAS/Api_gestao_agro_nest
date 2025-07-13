import { Module } from '@nestjs/common';
import { AlimentacaoService } from './alimentacao.service';
import { AlimentacaoController } from './alimentacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimentacao } from './entities/alimentacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alimentacao])],
  controllers: [AlimentacaoController],
  providers: [AlimentacaoService],
})
export class AlimentacaoModule {}
