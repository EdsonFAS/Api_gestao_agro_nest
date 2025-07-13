import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Api de Gestão de Rebanhos - Desenvolvido por: Edson Fernando e Lhuany Motta \n 
    Swwagger: http://localhost:5000/api \n`;
  }
}
