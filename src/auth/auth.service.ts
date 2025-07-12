import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

     constructor(
   
    private readonly userService: UserService,
  ) {}

     async validateUser(Email: string, Senha: string): Promise<User> {
    const user = await this.userService.findByEmail(Email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(Senha, user.Senha);

      if (isPasswordValid) {
        return {
          ...user,
          Senha: '',
        };
      }
    }

    throw new NotFoundException(
      'Email address or password provided is incorrect.',
    );
  }
}
