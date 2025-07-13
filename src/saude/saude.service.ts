import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaudeDto } from './dto/create-saude.dto';
import { UpdateSaudeDto } from './dto/update-saude.dto';
import { Saude } from './entities/saude.entity';

@Injectable()
export class SaudeService {
    constructor(
        @InjectRepository(Saude)
        private saudeRepository: Repository<Saude>,
    ) {}

    async create(createSaudeDto: CreateSaudeDto): Promise<Saude> {
        const saude = this.saudeRepository.create(createSaudeDto);
        return await this.saudeRepository.save(saude);
    }

    findAll(): Promise<Saude[]> {
        return this.saudeRepository.find();
    }

    async update(Id: number, updateSaudeDto: UpdateSaudeDto): Promise<string> {
        const saude = await this.saudeRepository.findOne({ where: { Id } });

        if (!saude) {
            throw new NotFoundException(`Registro de saúde com ID ${Id} não encontrado`);
        }

        await this.saudeRepository.update(Id, updateSaudeDto);

        return `Registro de saúde com ID ${Id} atualizado com sucesso`;
    }

    async delete(Id: number): Promise<string> {
        const result = await this.saudeRepository.delete(Id);

        if (result.affected === 0) {
            throw new NotFoundException(`Registro de saúde com ID ${Id} não encontrado`);
        }

        return `Registro de saúde com ID ${Id} deletado com sucesso`;
    }
}