import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface Produto {
  id: number;
  nome: string;
  cod_barra: string;
  valor: number;
  corredor: string;
  pratileira: string;
  quantidadeStoque: number;
  categoria: string;
}

function Produtos(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get<Produto>(`http://localhost:8080/produto/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar o produto:', error);
      }
    };
    fetchProduto();
  }, [id]);

  return (
    <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
      {produto && (
        <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
          <div className="w-5/12 flex flex-col space-y-4">
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              ID
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Nome
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Código de Barras
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Valor
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Corredor
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Prateleira
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Estoque
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Categoria
            </h2>

          </div>

          <div className="w-7/12 flex flex-col space-y-4">
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.id}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.nome}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.cod_barra}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.valor}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.corredor}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.pratileira}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.quantidadeStoque}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {produto.categoria}
            </h2>
          </div>
        </div>
      )}
      <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
        <Link
          to={`/`}
          className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default Produtos;
