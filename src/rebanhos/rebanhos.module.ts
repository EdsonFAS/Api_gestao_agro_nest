import { Module } from '@nestjs/common';
import { RebanhosService } from './rebanhos.service';
import { RebanhosController } from './rebanhos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rebanho } from './entities/rebanho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rebanho])],
  controllers: [RebanhosController],
  providers: [RebanhosService],
})
export class RebanhosModule {}
