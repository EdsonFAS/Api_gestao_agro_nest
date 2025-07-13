import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';
@Injectable()
export class AuthService {
     constructor(
         private readonly jwtService: JwtService,
         private readonly userService: UserService,
        ) {}

    login(user: User): UserToken {
      const payload :UserPayload = { 
        sub: user.Id,
        email: user.Email,
        name: user.NomeUsuario,
      };
      const jwt_token = this.jwtService.sign(payload);

      return{
        access_token: jwt_token,
      }
     }



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
