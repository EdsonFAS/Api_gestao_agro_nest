import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  CodigoBrinco: String;

  @Column()
  Raca: string;

  @Column()
  Peso: number;

  @Column()
  Sexo: string;

  @Column()
  Idade: number;

  @Column()
  Cor: string;

  @Column()
  Nome: string;

  @Column()
  IdPaterno: string;

  @Column()
  IdMatriz: string;

  
}