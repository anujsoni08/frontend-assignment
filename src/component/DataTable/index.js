import React, { useMemo, useState } from "react";
import Pagination from "../Pagination";
import "./style.css";
import { PAGE_SIZE, COLUMN_HEADERS, UNIQUE_HEADER_KEY } from "./constants";

function DataTable({ tableData }) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="data-table-container">
      <table aria-label="Data Table">
        <thead>
          <tr>
            {COLUMN_HEADERS.map((header) => (
              <th key={header.key} scope="col">
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => (
            <tr key={item[UNIQUE_HEADER_KEY]}>
              {COLUMN_HEADERS.map((header) => (
                <td key={header.key} scope="row">
                  {item[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={tableData.length}
        pageSize={PAGE_SIZE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default DataTable;
