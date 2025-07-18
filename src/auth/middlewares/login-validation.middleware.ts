import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LoginRequestBody } from '../models/LoginRequestBody';
import { validate } from 'class-validator';

@Injectable()
export class LoginValidationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
  

    
    const loginRequestBody = new LoginRequestBody();
    loginRequestBody.Email = body.Email;
    loginRequestBody.Senha = body.Senha;

    const validations = await validate(loginRequestBody);

 if (validations.length) {
  throw new BadRequestException(
    validations.reduce((acc, curr) => {
      return [
        ...acc,
        ...(curr.constraints ? Object.values(curr.constraints) : []),
      ];
    }, []),
  );
}

    next();
  }
}