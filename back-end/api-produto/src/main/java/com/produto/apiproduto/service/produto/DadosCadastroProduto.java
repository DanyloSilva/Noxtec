package com.produto.apiproduto.service.produto;

import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;

public record DadosCadastroProduto(@NotBlank String nome,
                                   Integer cod_barra,
                                   BigDecimal valor,
                                   Integer corredor,
                                   String pratileira,
                                   Integer quantidadestoque,
                                   CategoriaProdutoEnum categoria) {
}
