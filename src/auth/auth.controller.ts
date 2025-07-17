import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorator/is-public.decorator';
import { ApiBody } from '@nestjs/swagger';

@Controller('')
export class AuthController {
    constructor( private readonly authService: AuthService){}

    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
     @ApiBody({
    description: 'Informações de login',
    type: Object, // Definindo que o body será um objeto
    schema: {
      type: 'object',
      properties: {
        Email: { type: 'string', description: 'Email do usuário' },
        Senha: { type: 'string', description: 'Senha do usuário' },
      },
      required: ['Email', 'Senha'], // Campos obrigatórios
    },
  })
    login(@Request() req: AuthRequest){
     return this.authService.login(req.user);

    }
}
