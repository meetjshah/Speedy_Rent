import "./AdminUserTable.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'User ID', width: 200 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 70,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 170,
  },
];

const rows = [
  { id: 'URw8cIFp0LSVKLoQSdhWSoxjCSX2', firstName: 'Jon', lastName: 'Snow', age: 35, email: 'meetjshah97@gmail.com' },
  { id: 'Lp1ZsZfB9nW22dBCRTAdjTVQsOv2', firstName: 'Cersei', lastName: 'Lannister', age: 42, email: 'meetjshah977@gmail.com' },
  { id: 'ed25TNAceaZd36aVTA3k0hKzuER2', firstName: 'Dingle', lastName: 'Yo', age: 21, email: 'linjack@iu.edu' },
  { id: 'GoUTxsAaSdgHzSaJOYEM91HUy8l1', firstName: 'Arya', lastName: 'Stark', age: 16, email: 'bhattacharya.pratyuh@gmail.com' },
  { id: 'vDWL3K29BuQeqvnMan80rU10kyo1', firstName: 'Daenerys', lastName: 'Targaryen', age: 39, email: 'jbhushan@iu.edu' },
  { id: 'ra7vdBBl6pbQBPRi65bNaAkKSrp1', firstName: 'Mike', lastName: 'Melisandre', age: 21, email: 'random@random.com' },
  { id: 'A9vsEIUrwXSBdXVr85QyPVZYRwP2', firstName: 'John', lastName: 'Sindy', age: 23, email: 'trial@trial.com' },
  { id: 'cLw8O5GCUkf3N9NpgjPgkDjQpHE2', firstName: 'Cap', lastName: 'Leo', age: 27, email: 'pb@test.com' },
  { id: 'OsTWRcag59NLO8VWmiGUyHMTwbX2', firstName: 'Vince', lastName: 'Lee', age: 36, email: 'yerawov226@niekie.com' },
  { id: 'wNqaRAtsL5erjIyNzLcGh9teA4d2', firstName: 'Adam', lastName: 'Gress', age: 19, email: 'qwert@qwert.com' },
  { id: 'xXpgD73xmQO2ADtooMYi2u5Xuj52', firstName: 'Porta', lastName: 'Shin', age: 35, email: 'prbhatt@iu.com' },
  { id: 'abMgZ8QDQPRMGLXjTuqxEWScCbx2', firstName: 'Aaly', lastName: 'Grop', age: 20, email: 'asdf@asdf.com' },
  { id: 'iIZx2WzFB4X3ICd0c2PFLkz0wDQ2', firstName: 'May', lastName: 'Yo', age: 30, email: 'bhattacharya.pratyush@gmail.com' },
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
