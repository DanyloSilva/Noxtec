package com.produto.apiproduto.service.produto;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Table(name = "produto")
@Entity(name = "produto")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private Integer cod_barra;
    private BigDecimal valor;
    private  Integer corredor ;
    private String pratileira;
    private Integer quantidadestoque;
    private  Boolean ativo;
    @Enumerated(EnumType.STRING)
    private CategoriaProdutoEnum categoria;

public Produto (DadosCadastroProduto dados){

        this.ativo = true;
        this.nome = dados.nome();
        this.cod_barra  = dados.cod_barra();
        this.valor = dados.valor();
        this.corredor=dados.corredor();
        this.pratileira =dados.pratileira();
        this.quantidadestoque = dados.quantidadestoque();
       this.categoria = dados.categoria();

    }




    public void atualizarInformacoes(DadosAtualizacaoProduto dados) {
        if (dados.nome() != null) {
            this.nome = dados.nome();
        }
        if (dados.cod_barra() != null) {
            this.cod_barra = dados.cod_barra();
        }
        if (dados.valor() != null) {
            this.valor = dados.valor();
        }
        if (dados.corredor() != null) {
            this.corredor = dados.corredor();
        }
        if (dados.pratileira() != null) {
            this.pratileira = dados.pratileira();
        }
        if (dados.quantidadeStoque() != null) {
            this.quantidadestoque = dados.quantidadeStoque();
        }
        if (dados.categoria() != null) {
            this.categoria = dados.categoria();
        }

    }



    public void excuir() { this.ativo = false;}
}
