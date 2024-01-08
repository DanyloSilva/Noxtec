package com.produto.apiproduto.service.produto;

import java.math.BigDecimal;

public record DadosDetalhamentoProduto(Long id, String nome, Integer cod_barra, BigDecimal valor,Integer corredor,String pratileira , Integer quantidadeStoque, CategoriaProdutoEnum categoria) {

    public DadosDetalhamentoProduto(Produto produto){
        this(produto.getId(), produto.getNome(), produto.getCod_barra(),produto.getValor(),produto.getCorredor(), produto.getPratileira(), produto.getQuantidadestoque(), produto.getCategoria() );
    }
}
