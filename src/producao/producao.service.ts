import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProducaoDto } from './dto/create-producao.dto';
import { UpdateProducaoDto } from './dto/update-producao.dto';
import { Producao } from './entities/producao.entity';

@Injectable()
export class ProducaoService {
    constructor(
        @InjectRepository(Producao)
        private producaoRepository: Repository<Producao>,
    ) {}

    async create(createProducaoDto: CreateProducaoDto): Promise<Producao> {
        const producao = this.producaoRepository.create(createProducaoDto);
        return await this.producaoRepository.save(producao);
    }

    findAll(): Promise<Producao[]> {
        return this.producaoRepository.find();
    }

    async update(Id: number, updateProducaoDto: UpdateProducaoDto): Promise<string> {
        const producao = await this.producaoRepository.findOne({ where: { Id } });

        if (!producao) {
            throw new NotFoundException(`Produção com ID ${Id} não encontrada`);
        }

        await this.producaoRepository.update(Id, updateProducaoDto);

        return `Produção com ID ${Id} atualizada com sucesso`;
    }

    async delete(Id: number): Promise<string> {
        const result = await this.producaoRepository.delete(Id);

        if (result.affected === 0) {
            throw new NotFoundException(`Produção com ID ${Id} não encontrada`);
        }

        return `Produção com ID ${Id} deletada com sucesso`;
    }
}