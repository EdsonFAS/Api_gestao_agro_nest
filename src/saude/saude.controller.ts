import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { SaudeService } from './saude.service';
import { CreateSaudeDto } from './dto/create-saude.dto';
import { UpdateSaudeDto } from './dto/update-saude.dto';

@Controller('saude')
export class SaudeController {
    constructor(private readonly saudeService: SaudeService) {}

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async create(@Body() createSaudeDto: CreateSaudeDto) {
        return await this.saudeService.create(createSaudeDto);
    }

    @Get()

    async findAll() {
        const saudeRegistros = await this.saudeService.findAll();
        const saudeFormatada = saudeRegistros.map(saude => ({
            Id: saude.Id,
            Veterinario: saude.Veterinario,
            Status: saude.Status,
            Apetite: saude.Apetite,
            Temperatura: saude.Temperatura,
            fk_Animal_CodigoBrinco: saude.fk_Animal_CodigoBrinco,
            DataVerificacao: saude.DataVerificacao.toISOString().split('T')[0]
        }));
        return { Saude: saudeFormatada };
    }

    @Put(':Id')
    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    async update(@Param('Id') Id: number, @Body() updateSaudeDto: UpdateSaudeDto) {
        return await this.saudeService.update(Id, updateSaudeDto);
    }

    @Delete(':Id')
    async delete(@Param('Id') Id: number) {
        return await this.saudeService.delete(Id);
    }
}