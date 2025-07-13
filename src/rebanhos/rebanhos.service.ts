import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRebanhoDto } from './dto/create-rebanho.dto';
import { UpdateRebanhoDto } from './dto/update-rebanho.dto';
import { Rebanho } from './entities/rebanho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RebanhosService {

   constructor(
      @InjectRepository(Rebanho)
      private RebanhoRepository: Repository<Rebanho>,
    ) {}
  async create(createRebanhoDto: CreateRebanhoDto): Promise<Rebanho> {
     const rebanho = this.RebanhoRepository.create(createRebanhoDto);
     return await this.RebanhoRepository.save(rebanho);
   }

 findAll(): Promise<Rebanho[]> {
    return this.RebanhoRepository.find();
  }

 async update(IdRebanho: number, updateRebanhoDto: UpdateRebanhoDto): Promise<string> {
     const Rebanho = await this.RebanhoRepository.findOne({ where: { IdRebanho} });
 
     if (!Rebanho) {
       throw new NotFoundException(`Animal com ID ${IdRebanho} não encontrado`);
     }
 
     await this.RebanhoRepository.update(IdRebanho, updateRebanhoDto);
 
     return `Rebanho com ID ${IdRebanho} atualizado com sucesso`;
   }

  async delete(IdRebanho: number): Promise<string > {
    const result = await this.RebanhoRepository.delete(IdRebanho);

    if (result.affected === 0) {
      throw new NotFoundException(`Animal com ID ${IdRebanho} não encontrado`);
    }

    return `Animal com ID ${IdRebanho} deletado com sucesso`;
  }
}
