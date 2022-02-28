import "./AdminUserTable.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'User ID', width: 200 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'rentingStatus',
    headerName: 'Renting Status',
    width: 170,
  },
];

const rows = [
  { id: 'URw8cIFp0LSVKLoQSdhWSoxjCSX2', name: 'Snow Jon', email: 'meetjshah97@gmail.com', age: 35, rentingStatus: 'House' },
  { id: 'vDWL3K29BuQeqvnMan80rU10kyo1', name: 'Lannister Cersei', email: 'jbhushan@iu.edu', age: 42, rentingStatus: 'House' },
  { id: 'wNqaRAtsL5erjIyNzLcGh9teA4d2', name: 'Lannister Jaime', email: 'qwert@qwert.com', age: 45, rentingStatus: 'House' },
  { id: 'xXpgD73xmQO2ADtooMYi2u5Xuj52', name: 'Stark Arya', email: 'prbhatt@iu.com', age: 16, rentingStatus: 'House' },
];

export default function DataTable() {
  return (
    <div className="data_table_div" style={{ height: 1000, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}