import { IsNotEmpty, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(4 , {message:'Nome de Usário deve conter no minimo 4 Caracteres'})
    NomeUsuario: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    Email:string

     @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  Senha: string;
}
