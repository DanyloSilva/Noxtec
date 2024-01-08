package com.produto.apiproduto.controller;

import com.produto.apiproduto.repository.ProdutoRepository;
import com.produto.apiproduto.service.produto.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("produto")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoController {
    @Autowired
    private ProdutoRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody DadosCadastroProduto  dados, UriComponentsBuilder uriBuilder ){
        var produto = new Produto(dados);
        repository.save(produto);
        var uri = uriBuilder.path("/produto/{id}").buildAndExpand(produto.getId()).toUri();

        return ResponseEntity.created(uri).body(new DadosDetalhamentoProduto(produto));

    }
    @GetMapping
    public ResponseEntity<List<DadosListagemProduto>> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page =  repository.findAllByAtivoTrue(paginacao).stream().map(DadosListagemProduto::new).toList();
        return ResponseEntity.ok(page);

    }


    @GetMapping("/{id}")
    public ResponseEntity<DadosDetalhamentoProduto> detalhesProduto(@PathVariable Long id) {
        var produto = repository.findById(id);

        if (produto.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(new DadosDetalhamentoProduto(produto.get()));
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoProduto dados) {
        var produto = repository.getReferenceById(dados.id());
        produto.atualizarInformacoes(dados);
        return ResponseEntity.ok(new DadosDetalhamentoProduto(produto));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        var produto = repository.getReferenceById(id);
        produto.excuir();
        return ResponseEntity.noContent().build();
    }


}
