-- DROP DATABASE GestaoAgro;
CREATE DATABASE GestaoAgro;
USE GestaoAgro;

-- Tabela Usuario
CREATE TABLE Usuario (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    NomeCompleto VARCHAR(255) NOT NULL,
    NomeUsuario VARCHAR(100) NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    CPF VARCHAR(14) NOT NULL,
    DataNascimento DATE,
    Endereco VARCHAR(255)
);

-- Tabela Rebanho
CREATE TABLE Rebanho (
    IdRebanho INT AUTO_INCREMENT PRIMARY KEY,
    Tipo VARCHAR(100),
    Destino VARCHAR(255)
);

-- Tabela Animal
CREATE TABLE Animal (
	CodigoBrinco VARCHAR(5) NOT NULL  PRIMARY KEY,
    Nome VARCHAR(100),
    Raca VARCHAR(100) NOT NULL,
    Peso DOUBLE NOT NULL,
    Sexo VARCHAR(10) NOT NULL,
    Idade INT NOT NULL,
    Cor VARCHAR(20),
    IdPaterno int,
    IdMatriz int,
    Id_Rebanho INT,
      FOREIGN KEY (Id_Rebanho) REFERENCES Rebanho(IdRebanho)
);

-- Tabela Pastagem
CREATE TABLE Pastagem (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    AreaPastagem DOUBLE NOT NULL,
    LocalizacaoPastagem VARCHAR(255),
    Periodo INT,
    fk_Animal_CodigoBrinco VARCHAR(5) NOT NULL,
    FOREIGN KEY (fk_Animal_CodigoBrinco) REFERENCES Animal(CodigoBrinco)
);

-- Tabela Alimentacao
CREATE TABLE Alimentacao (
    IdAlimentacao INT AUTO_INCREMENT PRIMARY KEY,
    Fornecedor VARCHAR(255),
    Nome VARCHAR(100) NOT NULL,
    QuantidadeEstoque DOUBLE NOT NULL,
    DataValidade DATE,
    DataEntrega DATE
);

-- Tabela RebanhoAlimentacao
CREATE TABLE RebanhoAlimentacao (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    fk_rebanho_IdRebanho INT null,
    fk_alimentacao_IdAlimentacao INT null,
    FOREIGN KEY (fk_rebanho_IdRebanho) REFERENCES Rebanho(IdRebanho)   ON DELETE CASCADE,
    FOREIGN KEY (fk_alimentacao_IdAlimentacao) REFERENCES Alimentacao(IdAlimentacao)  ON DELETE CASCADE
  
);

-- Tabela Saude
CREATE TABLE Saude (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Veterinario VARCHAR(255),
    Status VARCHAR(100),
    Apetite VARCHAR(100),
    Temperatura DOUBLE,
    fk_Animal_CodigoBrinco VARCHAR(5) NOT NULL,
    DataVerificacao DATE,
    FOREIGN KEY (fk_Animal_CodigoBrinco) REFERENCES Animal(CodigoBrinco)
);

-- Tabela Producao
CREATE TABLE Producao (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    TipoProducao VARCHAR(100) NOT NULL,
    Data DATE NOT NULL,
    QuantidadeProduzida VARCHAR(100) NOT NULL,
    fk_Animal_CodigoBrinco VARCHAR(5) NOT NULL,
    FOREIGN KEY (fk_Animal_CodigoBrinco) REFERENCES Animal(CodigoBrinco)
);

-- Dados Tabela Usuario
INSERT INTO Usuario (NomeCompleto, NomeUsuario, Senha, Email, CPF, DataNascimento, Endereco)
VALUES
('João Teixeira', 'joaoteixeira', 'senha123', 'joao.teixeira@gmail.com', '123.456.789-00', '1990-01-15', 'Rua A, 123'),
('Edson Fernando', 'edsonfernando', 'senha789', 'edson.fernando@gmail.com', '234.567.890-11', '1992-03-10', 'Rua C, 789'),
('Lhuany Motta', 'lhuanymotta', 'senha012', 'lhuany.motta@gmail.com', '345.678.901-22', '1994-07-25', 'Avenida D, 101');

-- Dados Tabela Rebanho
INSERT INTO Rebanho (Tipo, Destino) VALUES
('Produção de Leite', 'Fazenda A'),
('Engorda', 'Fazenda B'),
('Reprodução', 'Fazenda C'),
('Corte', 'Fazenda D'),
('Leite Orgânico', 'Fazenda E'),
('Engorda Rápida', 'Fazenda F'),
('Reprodução Selecionada', 'Fazenda G'),
('Corte Premium', 'Fazenda H'),
('Leite A2', 'Fazenda I'),
('Engorda Intensiva', 'Fazenda J'),
('Reprodução de Elite', 'Fazenda K'),
('Corte Nobre', 'Fazenda L'),
('Leite Integral', 'Fazenda M'),
('Engorda Natural', 'Fazenda N'),
('Reprodução Tradicional', 'Fazenda O'),
('Corte Especial', 'Fazenda P'),
('Leite Desnatado', 'Fazenda Q'),
('Engorda Sustentável', 'Fazenda R'),
('Reprodução Moderna', 'Fazenda S'),
('Corte Gourmet', 'Fazenda T');

-- Dados Tabela Animal
INSERT INTO Animal (CodigoBrinco, Raca, Peso, Sexo, Idade, Id_Rebanho) VALUES
('BR001', 'Nelore', 450.5, 'M', 3, null),
('BR002', 'Angus', 520.3, 'F', 4, null),
('BR003', 'Brahman', 480.0, 'M', 2, null),
('BR004', 'Holandesa', 600.7, 'F', 5, null),
('BR005', 'Jersey', 430.2, 'F', 3, null),
('BR006', 'Nelore', 460.2, 'M', 2, null),
('BR007', 'Angus', 510.8, 'F', 3, null),
('BR008', 'Brahman', 490.5, 'M', 4, null),
('BR009', 'Holandesa', 620.3, 'F', 6, null),
('BR010', 'Jersey', 440.1, 'F', 2, null),
('BR011', 'Nelore', 470.5, 'M', 3, null),
('BR012', 'Angus', 530.7, 'F', 5, null),
('BR013', 'Brahman', 485.4, 'M', 2, null),
('BR014', 'Holandesa', 590.8, 'F', 4, null),
('BR015', 'Jersey', 420.6, 'F', 3, null),
('BR016', 'Nelore', 455.3, 'M', 4, null),
('BR017', 'Angus', 515.6, 'F', 3, null),
('BR018', 'Brahman', 475.2, 'M', 2, null),
('BR019', 'Holandesa', 610.4, 'F', 5, null),
('BR020', 'Jersey', 425.9, 'F', 3, null),
('BR021', 'Nelore', 465.7, 'M', 4, null),
('BR022', 'Angus', 525.1, 'F', 5, null),
('BR023', 'Brahman', 495.8, 'M', 3, null),
('BR024', 'Holandesa', 605.2, 'F', 6, null),
('BR025', 'Jersey', 435.4, 'F', 2, null),
('BR026', 'Nelore', 445.9, 'M', 2, null),
('BR027', 'Angus', 500.4, 'F', 3, null),
('BR028', 'Brahman', 490.2, 'M', 4, null),
('BR029', 'Holandesa', 630.7, 'F', 5, null),
('BR030', 'Jersey', 415.8, 'F', 3, null);

-- Dados Tabela Pastagem
INSERT INTO Pastagem (AreaPastagem, LocalizacaoPastagem, Periodo, fk_Animal_CodigoBrinco) VALUES
(10.5, 'Fazenda Boa Vista', 120, 'BR001'),
(15.0, 'Sítio São José', 150, 'BR002'),
(12.3, 'Fazenda Nova Vida', 90, 'BR003'),
(18.7, 'Fazenda Sol Nascente', 100, 'BR004'),
(22.0, 'Fazenda Lua Cheia', 130, 'BR005'),
(14.5, 'Fazenda Estrela Cadente', 110, 'BR006'),
(19.8, 'Fazenda Céu Azul', 140, 'BR007'),
(11.2, 'Fazenda Terra Fértil', 95, 'BR008'),
(16.4, 'Fazenda Vento Norte', 125, 'BR009'),
(13.7, 'Fazenda Água Limpa', 105, 'BR010'),
(20.5, 'Fazenda Serra Verde', 135, 'BR011'),
(17.3, 'Fazenda Campo Dourado', 115, 'BR012'),
(21.0, 'Fazenda Rio Tranquilo', 145, 'BR013'),
(14.8, 'Fazenda Montanha Alta', 98, 'BR014'),
(19.2, 'Fazenda Vale Feliz', 128, 'BR015'),
(12.6, 'Fazenda Colina Verde', 108, 'BR016'),
(18.9, 'Fazenda Pôr do Sol', 138, 'BR017'),
(15.1, 'Fazenda Aurora Boreal', 118, 'BR018'),
(22.5, 'Fazenda Horizonte Distante', 148, 'BR019'),
(13.4, 'Fazenda Caminho Suave', 102, 'BR020');

-- Dados Tabela Alimentacao
INSERT INTO Alimentacao (Fornecedor, Nome, QuantidadeEstoque, DataValidade, DataEntrega) VALUES
('Fornecedor A', 'Ração A', 100.0, '2025-06-01', '2024-12-01'),
('Fornecedor B', 'Ração B', 200.0, '2025-07-01', '2024-12-02'),
('Fornecedor C', 'Ração C', 150.0, '2025-08-01', '2024-12-03'),
('Fornecedor D', 'Ração D', 180.0, '2025-09-01', '2024-12-04'),
('Fornecedor E', 'Ração E', 220.0, '2025-10-01', '2024-12-05'),
('Fornecedor F', 'Ração F', 130.0, '2025-11-01', '2024-12-06'),
('Fornecedor G', 'Ração G', 170.0, '2025-12-01', '2024-12-07'),
('Fornecedor H', 'Ração H', 190.0, '2026-01-01', '2024-12-08'),
('Fornecedor I', 'Ração I', 210.0, '2026-02-01', '2024-12-09'),
('Fornecedor J', 'Ração J', 140.0, '2026-03-01', '2024-12-10'),
('Fornecedor K', 'Ração K', 160.0, '2026-04-01', '2024-12-11'),
('Fornecedor L', 'Ração L', 200.0, '2026-05-01', '2024-12-12'),
('Fornecedor M', 'Ração M', 230.0, '2026-06-01', '2024-12-13'),
('Fornecedor N', 'Ração N', 120.0, '2026-07-01', '2024-12-14'),
('Fornecedor O', 'Ração O', 150.0, '2026-08-01', '2024-12-15'),
('Fornecedor P', 'Ração P', 180.0, '2026-09-01', '2024-12-16'),
('Fornecedor Q', 'Ração Q', 210.0, '2026-10-01', '2024-12-17'),
('Fornecedor R', 'Ração R', 140.0, '2026-11-01', '2024-12-18'),
('Fornecedor S', 'Ração S', 170.0, '2026-12-01', '2024-12-19'),
('Fornecedor T', 'Ração T', 190.0, '2027-01-01', '2024-12-20');

-- Dados Tabela RebanhoAlimentacao
INSERT INTO RebanhoAlimentacao (fk_rebanho_IdRebanho, fk_alimentacao_IdAlimentacao)
VALUES
(1, 1),
(2, 2),
(3, 3);

-- Dados Tabela Saude
INSERT INTO Saude (Veterinario, Status, Apetite, Temperatura, fk_Animal_CodigoBrinco, DataVerificacao) VALUES
('Dr. Carlos Mendes', 'Saudável', 'Normal', 38.5, 'BR001', '2024-12-05'),
('Dra. Ana Paula', 'Febre', 'Reduzido', 40.2, 'BR002', '2024-12-06'),
('Dr. Roberto Lima', 'Saudável', 'Normal', 38.7, 'BR003', '2024-12-07'),
('Dr. Felipe Silva', 'Doente', 'Reduzido', 39.8, 'BR004', '2024-12-08'),
('Dra. Mariana Costa', 'Saudável', 'Normal', 38.6, 'BR005', '2024-12-09'),
('Dr. Lucas Oliveira', 'Febre', 'Reduzido', 40.1, 'BR006', '2024-12-10'),
('Dra. Juliana Santos', 'Saudável', 'Normal', 38.4, 'BR007', '2024-12-11'),
('Dr. Rafael Almeida', 'Doente', 'Reduzido', 39.9, 'BR008', '2024-12-12'),
('Dra. Camila Fernandes', 'Saudável', 'Normal', 38.3, 'BR009', '2024-12-13'),
('Dr. Bruno Pereira', 'Febre', 'Reduzido', 40.0, 'BR010', '2024-12-14'),
('Dra. Larissa Souza', 'Saudável', 'Normal', 38.2, 'BR011', '2024-12-15'),
('Dr. Gustavo Lima', 'Doente', 'Reduzido', 39.7, 'BR012', '2024-12-16'),
('Dra. Fernanda Rocha', 'Saudável', 'Normal', 38.1, 'BR013', '2024-12-17'),
('Dr. André Costa', 'Febre', 'Reduzido', 40.3, 'BR014', '2024-12-18'),
('Dra. Patrícia Alves', 'Saudável', 'Normal', 38.0, 'BR015', '2024-12-19'),
('Dr. Marcelo Santos', 'Doente', 'Reduzido', 39.6, 'BR016', '2024-12-20'),
('Dra. Vanessa Lima', 'Saudável', 'Normal', 37.9, 'BR017', '2024-12-21'),
('Dr. Thiago Oliveira', 'Febre', 'Reduzido', 40.4, 'BR018', '2024-12-22'),
('Dra. Renata Silva', 'Saudável', 'Normal', 37.8, 'BR019', '2024-12-23'),
('Dr. Diego Fernandes', 'Doente', 'Reduzido', 39.5, 'BR020', '2024-12-24');

-- Dados Tabela Producao
INSERT INTO Producao (TipoProducao, Data, QuantidadeProduzida, fk_Animal_CodigoBrinco) VALUES
('Leite', '2024-12-08', '20 litros', 'BR001'),
('Carne', '2024-11-30', '300 kg', 'BR002'),
('Leite', '2024-12-08', '18 litros', 'BR003'),
('Carne', '2024-11-30', '280 kg', 'BR004'),
('Leite', '2024-12-08', '22 litros', 'BR005'),
('Carne', '2024-11-30', '320 kg', 'BR006'),
('Leite', '2024-12-08', '19 litros', 'BR007'),
('Carne', '2024-11-30', '310 kg', 'BR008'),
('Leite', '2024-12-08', '21 litros', 'BR009'),
('Carne', '2024-11-30', '290 kg', 'BR010'),
('Leite', '2024-12-08', '23 litros', 'BR011'),
('Carne', '2024-11-30', '330 kg', 'BR012'),
('Leite', '2024-12-08', '17 litros', 'BR013'),
('Carne', '2024-11-30', '270 kg', 'BR014'),
('Leite', '2024-12-08', '24 litros', 'BR015'),
('Carne', '2024-11-30', '340 kg', 'BR016'),
('Leite', '2024-12-08', '16 litros', 'BR017'),
('Carne', '2024-11-30', '260 kg', 'BR018'),
('Leite', '2024-12-08', '25 litros', 'BR019'),
('Carne', '2024-11-30', '350 kg', 'BR020');

-- Consultar dados inseridos
SELECT * FROM Usuario;
SELECT * FROM Rebanho;
SELECT * FROM Animal;
SELECT * FROM Pastagem;
SELECT * FROM Alimentacao;
SELECT * FROM RebanhoAlimentacao;
SELECT * FROM Saude;
SELECT * FROM Producao;