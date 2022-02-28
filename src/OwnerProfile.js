import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="John"
        />
        <TextField
          required
          id="outlined-required"
          label="Adress"
          defaultValue="245 N Plar IN 30353"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="This is AdminProfile"
        />
        <TextField
          id="outlined-read-only-input"
          label="Account ID (Read Only)"
          defaultValue="7848513"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          defaultValue="35"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
    </Box>
  );
}
