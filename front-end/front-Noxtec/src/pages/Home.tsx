import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteAlert from '../components/produto/DeleteAlert';
import axios, { AxiosResponse } from "axios";

interface Produto {
  id: number;
  nome: string;
  valor: number;
  corredor: string;
}

function Home(): JSX.Element {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const loadUsers = async () => {
    try {
      const res: AxiosResponse<Produto[]> = await axios.get("http://localhost:8080/produto");
      setProdutos(res.data.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
      <h1 className="text-3xl font-bold">Produtos da Noxtec Tabela</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                      Nome
                    </th>
                    <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                      Valor
                    </th>
                    <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                      Corredor
                    </th>
                    <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="border-black border-b-2">
                  {produtos.map((data, index) => (
                    <tr key={index} className="bg-white border-b-2 border-black">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.nome}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.valor}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.corredor}
                      </td>
                      <td className="text-sm flex justify-between items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                        <Link
                          to={`/produtos/${data.id}`}
                          className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                        >
                          VIew
                        </Link>
                        <Link
                          to={`/edit-user/${data.id}`}
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                        >
                          Edit
                        </Link>
                        <DeleteAlert id={data.id} onDelete={loadUsers} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
