import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AnimalModule } from './animal/animal.module';
import { Animal } from './animal/entities/animal.entity';
import { SaudeModule } from './saude/saude.module';
import { Saude } from './saude/entities/saude.entity';
import { RebanhosModule } from './rebanhos/rebanhos.module';
import { Rebanho } from './rebanhos/entities/rebanho.entity';
import { AlimentacaoModule } from './alimentacao/alimentacao.module';
import { Alimentacao } from './alimentacao/entities/alimentacao.entity';
import { PastagemModule } from './pastagem/pastagem.module';
import { Pastagem } from './pastagem/entities/pastagem.entity';
import { ProducaoModule } from './producao/producao.module';
import { Producao } from './producao/entities/producao.entity';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: (Number (process.env.DB_PORT)),  // Convertendo para número
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
       entities: [User,Animal,Saude,Rebanho,Alimentacao,Pastagem,Producao], // Entidade Saude incluída
      synchronize: false,
    }),
    UserModule,
    AuthModule,
    AnimalModule,
    SaudeModule,
    RebanhosModule,
    AlimentacaoModule,
    PastagemModule,
    ProducaoModule
    
  ],
  controllers: [AppController],
  providers: [AppService,  {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },],
})
export class AppModule {}
