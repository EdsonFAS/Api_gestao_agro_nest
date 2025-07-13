import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { ProducaoService } from './producao.service';
import { CreateProducaoDto } from './dto/create-producao.dto';
import { UpdateProducaoDto } from './dto/update-producao.dto';

@Controller('producao')
export class ProducaoController {
    constructor(private readonly producaoService: ProducaoService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async create(@Body() createProducaoDto: CreateProducaoDto) {
        return await this.producaoService.create(createProducaoDto);
    }

    @Get()
    
    async findAll() {
        const producoes = await this.producaoService.findAll();
        const producoesFormatadas = producoes.map(producao => ({
            Id: producao.Id,
            TipoProducao: producao.TipoProducao,
            Data: producao.Data.toISOString().split('T')[0],
            QuantidadeProduzida: producao.QuantidadeProduzida,
            fk_Animal_CodigoBrinco: producao.fk_Animal_CodigoBrinco
        }));
        return { producoes: producoesFormatadas };
    }

    @Put(':Id')
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async update(@Param('Id') Id: number, @Body() updateProducaoDto: UpdateProducaoDto) {
        return await this.producaoService.update(Id, updateProducaoDto);
    }

    @Delete(':Id')
    async delete(@Param('Id') Id: number) {
        return await this.producaoService.delete(Id);
    }
}