import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pastagem {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    AreaPastagem: number;

    @Column()
    LocalizacaoPastagem: string;

    @Column()
    Periodo: number;

    @Column()
    fk_Animal_CodigoBrinco: string;
}