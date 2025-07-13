import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producao {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    TipoProducao: string;

    @Column()
    Data: Date;

    @Column()
    QuantidadeProduzida: string;

    @Column()
    fk_Animal_CodigoBrinco: string;
}