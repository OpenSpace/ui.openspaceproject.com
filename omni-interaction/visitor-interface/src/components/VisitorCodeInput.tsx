import React from 'react';
import {
  Button,
  Container,
  Divider,
  TextField
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function VisitorCodeInput() {
  return (
    <div>
      <Container>
        <p>Enter code</p>
        <TextField id="filled-basic" label="Code" variant="filled" />
      </Container>
      <Divider style={{margin: '1em'}}></Divider>
      <Button variant="outlined" endIcon={<SendIcon />}>Submit</Button>
    </div>
  );
}

export default VisitorCodeInput;
