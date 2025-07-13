import { IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Double } from 'typeorm';

@Entity()

export class Alimentacao {

    @PrimaryGeneratedColumn()
    @IsOptional() 
    IdAlimentacao ?:  number;
  
    @Column()
    Fornecedor: string;
  
    @Column()
    Nome: string;
  
    @Column()
    QuantidadeEstoque: number;
  

    @Column()
    DataValidade: Date;

    @Column()
    DataEntrega: Date;
}
