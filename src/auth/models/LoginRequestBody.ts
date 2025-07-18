import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  Email: string;

  @IsString()
  Senha: string;
}