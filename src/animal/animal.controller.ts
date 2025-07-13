import { Controller, Get, Post, Body, Patch, Param, Delete,  UsePipes, ValidationPipe, Redirect, Put } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  @Redirect("/animal")
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async create(@Body() createAnimalDto: CreateAnimalDto) {
    return await this.animalService.create(createAnimalDto);
  }

  @Get()
  
  async findAll() {
    const Animais = await this.animalService.findAll()
    const AnimaisFormamtados = Animais.map(Animal => ({
      CodigoBrinco: Animal.CodigoBrinco,
      Raca: Animal.Raca,
      Peso: Animal.Peso,
      Sexo: Animal.Sexo,
      Idade: Animal.Idade,
      Cor: Animal.Cor,
      Nome: Animal.Nome
    }))
  
    return {Animais:AnimaisFormamtados };

  }

  @Put(':CodigoBrinco')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async update(@Param('CodigoBrinco') CodigoBrinco: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return await this.animalService.update(CodigoBrinco, updateAnimalDto);
  }

  @Delete(':CodigoBrinco')
  async delete(@Param('CodigoBrinco') CodigoBrinco: string) {
    return await this.animalService.delete(CodigoBrinco);
  }

}
