import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Jon Snow"
        />
        <TextField
          required
          id="outlined-required"
          label="Adress"
          defaultValue=""
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="This is UserProfile"
        />
        <TextField
          id="outlined-read-only-input"
          label="Account ID (Read Only)"
          defaultValue="URw8cIFp0LSVKLoQSdhWSoxjCSX2"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-helperText"
          label="Other Info"
          defaultValue=""
          helperText="Some important text"
        />
      </div>
    </Box>
  );
}
