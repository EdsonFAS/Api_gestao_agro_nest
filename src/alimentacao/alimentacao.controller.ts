import { Controller, Get, Post, Body, Patch, Param, Delete, Render, ValidationPipe, UsePipes, Put, Redirect } from '@nestjs/common';
import { AlimentacaoService } from './alimentacao.service';
import { CreateAlimentacaoDto } from './dto/create-alimentacao.dto';
import { UpdateAlimentacaoDto } from './dto/update-alimentacao.dto';
import { Alimentacao } from './entities/alimentacao.entity';

@Controller('alimentacao')
export class AlimentacaoController {
  constructor(private readonly alimentacaoService: AlimentacaoService) {}

  @Post()
   @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
   async create(@Body() createAlimentacaoDto: CreateAlimentacaoDto) {
     return await this.alimentacaoService.create(createAlimentacaoDto);
   }

  @Get()
  @Render('alimentacao')
   async findAll() {
     const Alimentacao = await this.alimentacaoService.findAll()
     const AlimentacaoFormamtadas = Alimentacao.map(Alimentacao => ({
      IdAlimentacao: Alimentacao.IdAlimentacao,
       Fornecedor: Alimentacao.Fornecedor,
       Nome: Alimentacao.Nome,
       QuantidadeEstoque: Alimentacao.QuantidadeEstoque,
       DataValidade: Alimentacao.DataValidade.toISOString().split('T')[0],
       DataEntrega: Alimentacao.DataEntrega.toISOString().split('T')[0]
     }))
   
     return {Alimentacao:AlimentacaoFormamtadas };
 
   }

   @Put(':IdAlimentacao')
   @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
   async update(@Param('IdAlimentacao') IdAlimentacao: number, @Body() updateAlimentacaoDto: UpdateAlimentacaoDto) {
     return await this.alimentacaoService.update(IdAlimentacao, updateAlimentacaoDto);
   }

   @Delete(':IdAlimentacao')
  async delete(@Param('IdAlimentacao') IdAlimentacao: number) {
    return await this.alimentacaoService.delete(IdAlimentacao);
  }
}
