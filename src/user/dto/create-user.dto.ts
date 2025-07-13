import { Transform } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";
import { IsBeforeToday } from "src/Validators/is-before-today.validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(4 , {message:'Nome de Usário deve conter no minimo 4 Caracteres'})
    NomeUsuario: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    NomeCompleto: string

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

  @Transform(({ value }) => value.replace(/[^\d]/g, '')) // remove tudo que não for número
  @IsString()
  @Matches(/^\d{11}$/, { message: 'CPF deve conter 11 dígitos numéricos' })
  cpf: string;

  @IsDateString({}, { message: 'Data de nascimento inválida' })
  @IsBeforeToday({ message: 'Data de nascimento não pode ser no futuro' })
  DataNascimento: string;

  @IsNotEmpty()
  @IsString()
  Endereco: string

}
