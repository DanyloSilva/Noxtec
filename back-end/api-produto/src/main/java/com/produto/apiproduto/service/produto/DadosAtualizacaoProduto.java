package com.produto.apiproduto.service.produto;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record DadosAtualizacaoProduto(
        @NotNull
        Long id,
        String nome,
        Integer cod_barra,
        BigDecimal valor,
        Integer corredor ,
        String pratileira,
        Integer quantidadeStoque,
        CategoriaProdutoEnum categoria
        ) {


}
