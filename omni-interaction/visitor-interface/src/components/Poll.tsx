import React, { useState } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

interface Option {
  /* A unique key that represents the option */
  key: string;
  /* The name of the option - that will be visible*/
  name: string;
  /* A RGB color in the format rgb(R, G, B), with values 0-255 */
  color?: string;
}

interface PollStyle {
  /* The list of options to show in the poll */
  layout?: 'grid' | 'list';
}

interface PollProps {
  // identifier: string,
  /* The list of options to show in the poll */
  options: Option[];
  /* Settings related to how the poll should look, visually */
  styleSettings?: PollStyle;
  // /* The number of items that a user may select */
  // nAllowedOptions: number;
}

function Poll({
  options,
  styleSettings = {
    layout: 'grid'
  }
}: PollProps)
{
  const [selected, setSelected] = useState<string | null>(null);

  const Item = styled(Paper)({
    padding: "1em",
    textAlign: 'center',
  });

  function item(option: Option) {
    const style = {
      backgroundColor: option.color
    };
    const styleSelected = {
      ...style,
      outline: 'solid white'
    }
    return (
      <Item
        key={option.key}
        style={(option.key === selected) ? styleSelected : style}
        onClick={() => setSelected(option.key)}
      >
        {option.name}
      </Item>
    );
  }

  return (
    <div>
      <Container>
        <p>Choose your option</p>
        { styleSettings.layout === 'list' &&
          <Stack spacing={3} >
            {options.map((option) => item(option))}
          </Stack>
        }
        { styleSettings.layout === 'grid' &&
          <Grid
            container
            spacing={3}
            justifyContent="space-evenly"
            alignItems="center"
          >
            {options.map((option) => (
              <Grid item xs={6} key={option.key}>
                { item(option) }
              </Grid>
            ))}
          </Grid>
        }
      </Container>
      <Divider style={{margin: '1em'}}></Divider>
      <Button variant="outlined" endIcon={<SendIcon />}>Vote</Button>
    </div>
  );
}

export default Poll;