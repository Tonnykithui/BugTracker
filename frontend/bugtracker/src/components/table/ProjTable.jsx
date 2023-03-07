import React, { useMemo, useEffect } from 'react';
import { useTable } from 'react-table';
import { ProjColumns } from './columns';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjectThunk } from '../../redux';



const ProjTable = () => {


  const projects = useSelector(state => state.fetchProject.data);
  console.log(projects);
  const columns = useMemo(() => ProjColumns, []);
  const data = useMemo(() => projects, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectThunk())
  },[projects])

  const tableInstance = useTable({
    columns,
    data
  });

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow 
  } = tableInstance;
  return (
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
    </table>
  );
}


export default ProjTable;


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