import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UsePipes, ValidationPipe, Put, ParseIntPipe } from '@nestjs/common';
import { RebanhosService } from './rebanhos.service';
import { CreateRebanhoDto } from './dto/create-rebanho.dto';
import { UpdateRebanhoDto } from './dto/update-rebanho.dto';
import { Rebanho } from './entities/rebanho.entity';

@Controller('rebanhos')
export class RebanhosController {
  constructor(private readonly rebanhosService: RebanhosService) {}

  @Post()
   @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
   async create(@Body() createRebanhoDto: CreateRebanhoDto) {

     return await this.rebanhosService.create(createRebanhoDto);
   }

  @Get()

  async findAll() {
    const Rebanho = await this.rebanhosService.findAll()
    const RebanhoFormamtados = Rebanho.map(Rebanho => ({
      IdRebanho: Rebanho.IdRebanho,
      Tipo: Rebanho.Tipo,
      Destino: Rebanho.Destino,
    }))
  
    return {Rebanho:RebanhoFormamtados };

  }
  @Put(':IdRebanho')
@UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
async update(
  @Param('IdRebanho') IdRebanho: number,  // Aqui está a alteração
  @Body() updateRebanhoDto: UpdateRebanhoDto
) {
  return await this.rebanhosService.update(IdRebanho, updateRebanhoDto);
}

  @Delete(':IdRebanho')
  async delete(@Param('IdRebanho') IdRebanho: number) {
    return await this.rebanhosService.delete(IdRebanho);
  }


}
