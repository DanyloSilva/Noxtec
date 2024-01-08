import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

interface Produto {
  id: number;
  nome: string;
  cod_barra: number;
  valor: string;
  corredor: number;
  pratileira: string;
  quantidadeStoque: number;
  categoria: string;
}

function EditarProduto(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    cod_barra: 0,
    valor: "",
    corredor: 0,
    pratileira: "",
    quantidadeStoque: 0,
    categoria: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get<Produto>(`http://localhost:8080/produto/${id}`).then((res) => {
      setProduto(res.data);
    });
  }, [id]);

  function atualizarProduto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.put(`http://localhost:8080/produto`, produto).then(() => {
      navigate("/");
    });
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Editar Produto</h2>
      <form className="w-[50%] h-full flex flex-col mt-2" onSubmit={atualizarProduto}>
        <input
          value={produto.nome}
          onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Digite o nome do produto"
        />
      <input
  value={produto.cod_barra === 0 ? "" : produto.cod_barra}
  onChange={(e) => {
    const value = e.target.value.trim();
    setProduto({
      ...produto,
      cod_barra: value !== "" ? parseInt(value, 10) : 0 // Ou outro valor padrão se vazio
    });
  }}
  className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
  type="number"
  placeholder="Digite o código de barras do produto"
/>

        <input
          value={produto.valor}
          onChange={(e) => setProduto({ ...produto, valor: e.target.value })}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Digite o valor do produto"
        />
        <input
  value={produto.corredor === 0 ? "" : produto.corredor}
  onChange={(e) => {
    const value = e.target.value.trim();
    setProduto({
      ...produto,
      corredor: value !== "" ? parseInt(value, 10) : 0 // Ou outro valor padrão se vazio
    });
  }}
  className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
  type="number"
  placeholder="Digite o corredor do produto"
/>

        <input
          value={produto.pratileira}
          onChange={(e) => setProduto({ ...produto, pratileira: e.target.value })}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Digite a pratileira do produto"
        />
      <input
  value={produto.quantidadeStoque === 0 ? "" : produto.quantidadeStoque}
  onChange={(e) => {
    const value = e.target.value.trim();
    setProduto({
      ...produto,
      quantidadeStoque: value !== "" ? parseInt(value, 10) : 0 // Ou outro valor padrão se vazio
    });
  }}
  className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
  type="number"
  placeholder="Digite a quantidade em estoque do produto"
/>
        <select
          value={produto.categoria}
          onChange={(e) => setProduto({ ...produto, categoria: e.target.value })}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        >
          <option value="eletronico">Eletrônico</option>
          <option value="moda">Moda</option>
          <option value="frios">Frios</option>
          <option value="padaria">Padaria</option>
        </select>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
        >
          ATUALIZAR PRODUTO
        </button>
      </form>
      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default EditarProduto;
