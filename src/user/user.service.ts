import { Injectable, NotFoundException } from '@nestjs/common';
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
    const user = {
      ...createUserDto,
      Senha: await bcrypt.hash(createUserDto.Senha, 12),
    }
    const createUser = await this.usersRepository.create(user)

    return {...createUser,
      Senha:''
    };
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findByEmail(Email:string): Promise<User> {
  const user = await this.usersRepository.findOne({ where: { Email } });
  if (!user) {
    throw new NotFoundException('Usuário não encontrado');
  }
  return user;
}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

}
