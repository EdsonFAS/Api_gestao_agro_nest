import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { PastagemService } from './pastagem.service';
import { CreatePastagemDto } from './dto/create-pastagem.dto';
import { UpdatePastagemDto } from './dto/update-pastagem.dto';

@Controller('pastagem')
export class PastagemController {
    constructor(private readonly pastagemService: PastagemService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async create(@Body() createPastagemDto: CreatePastagemDto) {
        return await this.pastagemService.create(createPastagemDto);
    }

    @Get()
  
    async findAll() {
        const pastagens = await this.pastagemService.findAll();
        const pastagensFormatadas = pastagens.map(pastagem => ({
            Id: pastagem.Id,
            AreaPastagem: pastagem.AreaPastagem,
            LocalizacaoPastagem: pastagem.LocalizacaoPastagem,
            Periodo: pastagem.Periodo,
            fk_Animal_CodigoBrinco: pastagem.fk_Animal_CodigoBrinco
        }));
        return { pastagens: pastagensFormatadas };
    }

    @Put(':Id')
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async update(@Param('Id') Id: number, @Body() updatePastagemDto: UpdatePastagemDto) {
        return await this.pastagemService.update(Id, updatePastagemDto);
    }

    @Delete(':Id')
    async delete(@Param('Id') Id: number) {
        return await this.pastagemService.delete(Id);
    }
}