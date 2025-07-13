import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaudeController } from './saude.controller';
import { SaudeService } from './saude.service';
import { Saude } from './entities/saude.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Saude])],
    controllers: [SaudeController],
    providers: [SaudeService],
})
export class SaudeModule {}