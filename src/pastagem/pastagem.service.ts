import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePastagemDto } from './dto/create-pastagem.dto';
import { UpdatePastagemDto } from './dto/update-pastagem.dto';
import { Pastagem } from './entities/pastagem.entity';

@Injectable()
export class PastagemService {
    constructor(
        @InjectRepository(Pastagem)
        private pastagemRepository: Repository<Pastagem>,
    ) {}

    async create(createPastagemDto: CreatePastagemDto): Promise<Pastagem> {
        const pastagem = this.pastagemRepository.create(createPastagemDto);
        return await this.pastagemRepository.save(pastagem);
    }

    findAll(): Promise<Pastagem[]> {
        return this.pastagemRepository.find();
    }

    async update(Id: number, updatePastagemDto: UpdatePastagemDto): Promise<string> {
        const pastagem = await this.pastagemRepository.findOne({ where: { Id } });

        if (!pastagem) {
            throw new NotFoundException(`Pastagem com ID ${Id} não encontrada`);
        }

        await this.pastagemRepository.update(Id, updatePastagemDto);

        return `Pastagem com ID ${Id} atualizada com sucesso`;
    }

    async delete(Id: number): Promise<string> {
        const result = await this.pastagemRepository.delete(Id);

        if (result.affected === 0) {
            throw new NotFoundException(`Pastagem com ID ${Id} não encontrada`);
        }

        return `Pastagem com ID ${Id} deletada com sucesso`;
    }
}