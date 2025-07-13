import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Repository,DeepPartial  } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Animal } from './entities/animal.entity';


@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private AnimalRepository: Repository<Animal>,
  ) {}


  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = this.AnimalRepository.create(createAnimalDto);
    return await this.AnimalRepository.save(animal);
  }
  findAll(): Promise<Animal[]> {
    return this.AnimalRepository.find();
  }


  async update(CodigoBrinco: string, updateAnimalDto: UpdateAnimalDto): Promise<string> {
    const animal = await this.AnimalRepository.findOne({ where: { CodigoBrinco } });

    if (!animal) {
      throw new NotFoundException(`Animal com ID ${CodigoBrinco} não encontrado`);
    }

    await this.AnimalRepository.update(CodigoBrinco, updateAnimalDto);

    return `Animal com ID ${CodigoBrinco} atualizado com sucesso`;
  }

  async delete(CodigoBrinco: string): Promise<string> {
    const result = await this.AnimalRepository.delete(CodigoBrinco);

    if (result.affected === 0) {
      throw new NotFoundException(`Animal com ID ${CodigoBrinco} não encontrado`);
    }

    return `Animal com ID ${CodigoBrinco} deletado com sucesso`;
  }
}
