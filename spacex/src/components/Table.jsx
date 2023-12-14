import React, { useEffect } from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import './Table.css';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setSortBy, setSortDirection } from "../features/tableSlice";

const Table = ({ columns, data }) => {
    const { currentPage, sort, sortDirection } = useSelector((state) => state.table);
    const dispatch = useDispatch();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        gotoPage,
        state: { pageIndex, sortBy, filters },
        pageCount,
        setFilter
      } = useTable({ columns, data, initialState: { pageIndex: currentPage - 1, sortBy: [{id: sort === null ? 'flight_number' : sort, desc: sortDirection === 'desc'}] } }, useFilters, useSortBy, usePagination);
      
      useEffect(() => {
        dispatch(setCurrentPage(pageIndex+1));
        if(sortBy[0] != null){
        dispatch(setSortBy(sortBy[0].id));
        dispatch(setSortDirection(sortBy[0].desc ? 'desc' : 'asc'));
        }
        else{
          dispatch(setSortBy(null));
          dispatch(setSortDirection('asc'));
        }
      },[dispatch, pageIndex, sortBy])

      const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= pageCount; i++) {
          pageNumbers.push(
            <li key={i} className={i === pageIndex+1? 'active' : ''}>
              <button onClick={() => gotoPage(i-1)}>{i}</button>
            </li>
          );
        }
        return pageNumbers;
      };

    return(
        <>
            <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                  <span {...column.getSortByToggleProps()}>{column.render('Header')} </span>
                  <span>{column.isSorted && (column.isSortedDesc ? ' 🔽' : ' 🔼')}</span>
                  <div key={column.id}>
                  {column.canFilter ? (
                      <input
                        type="text"
                        value={filters[column.id]}
                        onChange={e => {setFilter(column.id, e.target.value);gotoPage(0);}}
                        placeholder={`Filter ${column.Header}`}
                      />
                    ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
            <ul className="pagination">
            <li>
            <button disabled={pageIndex <= 0} onClick={() => gotoPage(pageIndex-1)}>Prev</button>
            </li>
            {renderPageNumbers()}
            <li>
            <button disabled={pageIndex >= pageCount-1} onClick={() => gotoPage(pageIndex+1)}>Next</button>
            </li>
            </ul>
        </div>
        </>
    )
}

export default Table;
