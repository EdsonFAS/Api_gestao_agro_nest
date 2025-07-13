import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Saude {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Veterinario: string;

    @Column()
    Status: string;

    @Column()
    Apetite: string;

    @Column()
    Temperatura: number;

    @Column()
    fk_Animal_CodigoBrinco: string;

    @Column()
    DataVerificacao: Date;
}