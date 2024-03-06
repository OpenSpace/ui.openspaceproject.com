import React, { useState } from 'react';
import {
  Button,
  Container,
  Divider,
  TextField
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface Props {
  /* A function that is called on enter */
  onEnter: (a: string) => void;
}

function VisitorCodeInput({ onEnter } : Props) {
  const [input, setInput] = useState<string>("");

  function onInputChange(e : React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <div>
      <Container>
        <p>Enter code</p>
        <TextField id="filled-basic" label="Code" variant="filled" onChange={onInputChange} />
      </Container>
      <Divider style={{margin: '1em'}}></Divider>
      <Button variant="outlined" endIcon={<SendIcon />} onClick={() => onEnter(input)}>
        Submit
      </Button>
    </div>
  );
}

export default VisitorCodeInput;
