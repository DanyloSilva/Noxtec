package com.produto.apiproduto.repository;

import com.produto.apiproduto.service.produto.Produto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository  <Produto ,Long>{
    Page<Produto> findAllByAtivoTrue(Pageable paginacao);
}
