import "./AdminUserTable.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'User ID', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
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
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, rentingStatus: 'Outdoor Soccer Field' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, rentingStatus: 'Headphone' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, rentingStatus: 'House' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, rentingStatus: 'House' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 39, rentingStatus: 'Indoor Soccer Field' },
  { id: 6, lastName: 'Melisandre', firstName: 'Mike', age: 50, rentingStatus: 'House' },
];

export default function DataTable() {
  return (
    <div className="data_table_div" style={{ height: 1000, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}