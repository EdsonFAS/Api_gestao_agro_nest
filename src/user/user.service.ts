import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

   constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create (createUserDto: CreateUserDto) {

    const userExists = await this.usersRepository.findOne({ where: { CPF: createUserDto.cpf } });

  if (userExists) {
    
    throw new HttpException('Usuário com esse CPF já existe.', 400);
  }

    const user = {
      ...createUserDto,
      Senha: await bcrypt.hash(createUserDto.Senha, 12),
    }
    const createUser = await this.usersRepository.create(user)
    await this.usersRepository.save(createUser)

    return {...createUser,
      Senha:''
    };
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

   findByEmail(Email:string): Promise<User | null> {
  const user =  this.usersRepository.findOne({ where: { Email } });
  if (!user) {
    throw new NotFoundException('Usuário não encontrado');
  }
  return user;
}

   async update(Id: number, updateUserDto: UpdateUserDto) {

    const User = this.usersRepository.findOne({where: {Id}})

    if(!User){
       throw new NotFoundException("Este Usuario não existe !!")
    }
    
    await this.usersRepository.update(Id, updateUserDto)

    return `Cadastro Atualizado com sucesso`;
  }

  async delete(Id: number){

    const result = await this.usersRepository.delete(Id)

       if (result.affected === 0) {
      throw new NotFoundException(`Usuário não encontrado`);
    }

    return 'Usuario deletado com sucesso!'
  }

}
