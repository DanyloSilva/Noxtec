-- Arquivo: V1__criar_tabela_produto.sql

CREATE TABLE produto (
                         id BIGINT AUTO_INCREMENT PRIMARY KEY,
                         nome VARCHAR(255) NOT NULL,
                         cod_barra INT,
                         valor DECIMAL(10, 2),
                         corredor INT,
                         pratileira VARCHAR(255),
                         quantidadestoque INT,
                         ativo TINYINT(1),
                         categoria ENUM('eletronico', 'moda', 'frios','padaria')



);
