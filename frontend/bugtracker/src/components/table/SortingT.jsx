import React, { useMemo, useEffect, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from 'react-table';
import { ProjColumns } from './columns';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectThunk } from '../../redux';
import GlobalProjFilter from './GlobalProjFilter';
import ColumnFilter from './ColumnFilter';
import EditDelete from './EditDelete';
import { Link } from 'react-router-dom';

const SortingT = () => {

  const projects = useSelector(state => state.fetchProject.data);
  console.log(projects);
  const columns = useMemo(() => ProjColumns, []);
  const data = useMemo(() => projects, []);
  const defaultColumn = useMemo(() => {
      return {
          Filter:ColumnFilter
      }
  }, [])

  const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(fetchProjectThunk())
  },[projects]) */

  const tableInstance = useTable({
    columns,
    data,
    defaultColumn
  },
  useFilters,useGlobalFilter,useSortBy,usePagination);

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page,
    nextPage,
    previousPage, 
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter 
  } = tableInstance;

  const { globalFilter, pageSize } = state;
  useEffect(() => {setPageSize(5) }, [])
  
  return (
    <>
    {/* <GlobalProjFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
    <table {...getTableProps()} className='w-full'>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? 
                  <img src="../.././img/down.png" className='h-3 w-3' alt="" /> : 
                  <img src="../.././img/up.png"  className='h-3 w-3' alt="" />) : ''}
                  </span>
                  {/* <div className='text-black'>
                      {column.canFilter ? column.render('Filter') : null}
                  </div> */}
            </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return(<td {...cell.getCellProps()}><Link to={`/projects/${row.original.projectId}`}>{cell.render('Cell')}</Link>
                </td>)
              })}
              <EditDelete id={row.original.id}/>
            </tr>
            
          )
        })}
      </tbody>
    </table>
    <div className='mt-3 pl-4'>
    <button className='page-btn-prev mr-2' onClick={() => previousPage()}>Previous</button>
    <button className='page-btn-next mr-2' onClick={() => nextPage()}>Next</button>
    </div>
    </>
  );
}


export default SortingT;


{/*
   const tableInstance = useTable({
    columns:ProjColumns,
    data:projects
  });

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow 
  } = tableInstance;

  <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table> */}