import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rebanho {


    @PrimaryGeneratedColumn()
    IdRebanho: Number;
     
    @Column()
    Tipo: String;
    
    @Column()
    Destino: string;
    
   
}
