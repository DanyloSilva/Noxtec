import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  nome: string;
  cod_barra: number;
  valor: number;
  corredor: number;
  pratileira: string;
  quantidadestoque: number;
  categoria: string;
}

function Add(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cod_barra: 0,
    valor: 0,
    corredor: 0,
    pratileira: "",
    quantidadestoque: 0,
    categoria: "",
  });

  const navigate = useNavigate();

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.post("http://localhost:8080/produto", formData).then(() => {
      navigate("/");
    });
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">Adicionar Produto</h2>
      <form className="w-[50%] h-full flex flex-col mt-2" onSubmit={submitForm}>
        <input
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Digite o nome"
        />
     <input
    value={formData.cod_barra === 0 ? "" : formData.cod_barra}
    onChange={(e) => {
      const value = e.target.value.trim();
      setFormData({
        ...formData,
        cod_barra: value !== "" ? parseInt(value, 10) : 0 // Ou outro valor padrão se vazio
      });
    }}
    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
    type="number"
    placeholder="Digite o código de barras"
  />
        <input
    value={formData.valor === 0 ? "" : formData.valor}
    onChange={(e) => {
      const value = e.target.value.trim();
      setFormData({
        ...formData,
        valor: value !== "" ? parseInt(value, 10) : 0 // Ou outro valor padrão se vazio
      });
    }}
    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
    type="number"
    placeholder="Digite o valor"
  />
  <input
    value={formData.corredor === 0 ? "" : formData.corredor}
    onChange={(e) => {
      const value = e.target.value.trim();
      setFormData({
        ...formData,
        corredor: value !== "" ? parseInt(value, 10) : 0 // Ou outro valor padrão se vazio
      });
    }}
    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
    type="number"
    placeholder="Digite o corredor"
  />
        <input
          value={formData.pratileira}
          onChange={(e) => setFormData({ ...formData, pratileira: e.target.value })}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Digite uma letra para  prateleira"
        />
      <input
    value={formData.quantidadestoque === 0 ? "" : formData.quantidadestoque}
    onChange={(e) => {
      const value = e.target.value.trim();
      setFormData({
        ...formData,
        quantidadestoque: value !== "" ? parseInt(value, 10) : 0 // Ou outro valor padrão se vazio
      });
    }}
    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
    type="number"
    placeholder="Digite a quantidade em estoque"
  />
        <select
          value={formData.categoria}
          onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
        >
          <option value="">Selecione a categoria do produto</option>
          <option value="eletronico">Eletrônico</option>
          <option value="moda">Moda</option>
          <option value="frios">Frios</option>
          <option value="padaria">Padaria</option>
        </select>
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
        >
          Adicionar Produto
        </button>
      </form>
    </div>
  );
}

export default Add;
