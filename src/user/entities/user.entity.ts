import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Usuario')
export class User {

     @PrimaryGeneratedColumn()
        Id: number;
    
        @Column()
        NomeCompleto: string;
    
        @Column()
        NomeUsuario: string;
    
        @Column()
        Senha: string;
    
        @Column()
        Email: String;
    
        @Column()
        CPF: string;
    
        @Column()
        DataNascimento: Date;

        @Column()
        Endereco: String

}
