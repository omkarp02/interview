import React, { useState } from "react";
import Pagination from "./Pagination";

const Table = ({ columns, data, pagination }) => {
  const { page, noOfData, pageSize, onPagination } = pagination;

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th scope="col" key={column.key}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{item[column.key] ?? ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={page}
        totalCount={noOfData}
        pageSize={pageSize}
        onPageChange={(page) => onPagination(page)}
      />
    </div>
  );
};

// const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`page-item ${currentPage === number ? "active" : ""}`}
//           >
//             <button onClick={() => paginate(number)} className="page-link">
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

export default Table;
