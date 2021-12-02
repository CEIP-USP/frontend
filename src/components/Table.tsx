import React from 'react';

const Table = ({ values }: { values: string[] }) => {
  return (
    <>
      <table className="text-left w-3/4 my-4">
        <thead className="bg-blue-700 flex text-white w-full">
          <tr>
            <th className="p-4">Serviços utilizados</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 flex flex-col items-center justify-between overflow-x-scroll md:overflow-x-auto w-full">
          {values.map((value) => {
            return (
              <tr className="w-full mb-4" key={value}>
                <td className="p-4">{value}</td>
              </tr>
            );
          })}
          {values.length == 0 && (
            <tr className="w-full mb-4">
              <td className="p-4 text-gray-500 text-center font-semibold">
                Você não utiliza nenhum serviço do CEIP-USP
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
