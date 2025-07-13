import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlimentacaoDto } from './dto/create-alimentacao.dto';
import { UpdateAlimentacaoDto } from './dto/update-alimentacao.dto';
import { Alimentacao } from './entities/alimentacao.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlimentacaoService {

   constructor(
      @InjectRepository(Alimentacao)
      private AlimentacaoRepository: Repository<Alimentacao>,
    ) {}

 async create(createAnimalDto: CreateAlimentacaoDto): Promise<Alimentacao> {
    const alimentacao = this.AlimentacaoRepository.create(createAnimalDto);
    return await this.AlimentacaoRepository.save(alimentacao);
  }

  findAll(): Promise<Alimentacao[]> {
    return this.AlimentacaoRepository.find();
  }

  async update(IdAlimentacao: number, updateAnimalDto: UpdateAlimentacaoDto): Promise<string> {
    const animal = await this.AlimentacaoRepository.findOne({ where: { IdAlimentacao } });

    if (!animal) {
      throw new NotFoundException(`Animal com ID ${IdAlimentacao} não encontrado`);
    }

    await this.AlimentacaoRepository.update(IdAlimentacao, updateAnimalDto);

    return `Animal com ID ${IdAlimentacao} atualizado com sucesso`;
  }
  async delete(IdAlimentacao: number): Promise<string> {
    const result = await this.AlimentacaoRepository.delete(IdAlimentacao);

    if (result.affected === 0) {
      throw new NotFoundException(`Animal com ID ${IdAlimentacao} não encontrado`);
    }

    return `Animal com ID ${IdAlimentacao} deletado com sucesso`;
  }
}