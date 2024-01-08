package com.produto.apiproduto.service.produto;

import java.math.BigDecimal;

public record DadosListagemProduto(Long id, String nome, BigDecimal valor, Integer corredor) {
    public DadosListagemProduto  (Produto produto){
        this(produto.getId(), produto.getNome(), produto.getValor(), produto.getCorredor());
    }
}
