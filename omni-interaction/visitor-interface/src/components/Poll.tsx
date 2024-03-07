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

interface PollStyle {
  /* The list of options to show in the poll */
  layout?: 'grid' | 'list';
}

interface Option {
  /* A unique key that represents the option */
  identifier: string;
  /* The name of the option - that will be visible */
  name: string;
  /* A RGB color in the format rgb(R, G, B), with values 0-255 */
  color?: string;
  /* A url to use for an image to show on the button for the option */
  url?: string;
}
// @TODO: handle URL

interface DataTable {
  // The scenario identifier
  identifier: string,
  /* The list of options to show in the poll */
  options: Option[];
  // An optional description to show at the top
  description?: string,
}
// @TODO: allowChangingVote and nAllowedVotes

interface PollProps {
  /* The data used for creating the poll */
  data: DataTable
  /* Settings related to how the poll should look, visually */
  styleSettings?: PollStyle;
}

function Poll({
  data,
  styleSettings = {
    layout: 'grid'
  }
}: PollProps)
{
  const [selected, setSelected] = useState<string | null>(null);
  const [hasSubmitted, setSubmitted] = useState<boolean>(false);

  const Item = styled(Paper)({
    padding: "1em",
    textAlign: 'center',
  });

  function item(option: Option) {
    const style = {
      backgroundColor: option?.color
    };
    const styleSelected = {
      ...style,
      outline: 'solid white'
    }
    return (
      <Item
        key={option.identifier}
        style={(option.identifier === selected) ? styleSelected : style}
        onClick={() => setSelected(option.identifier)}
      >
        {option.name}
      </Item>
    );
  }

  function onSubmit() {
    if (selected) {
      setSubmitted(true);
    }
  }

  function poll() {
    return (
      <div>
        <Container>
          <p>{data.description || "Make your vote"}</p>
          { styleSettings.layout === 'list' &&
            <Stack spacing={3} >
              {data.options.map((option) => item(option))}
            </Stack>
          }
          { styleSettings.layout === 'grid' &&
            <Grid
              container
              spacing={3}
              justifyContent="space-evenly"
              alignItems="center"
            >
              { data.options.map((option) => (
                <Grid item xs={6} key={option.identifier}>
                  { item(option) }
                </Grid>
              ))}
            </Grid>
          }
        </Container>
        <Divider style={{margin: '1em'}}></Divider>
        <Button
          variant="outlined"
          endIcon={<SendIcon />}
          onClick={onSubmit}
          disabled={selected == null}
        >
          Vote
        </Button>
      </div>
    );
  }

  function onSubmitScreen() {
    const option = data.options.find((el) => el.identifier === selected);
    return (
      <Container>
        <p>You voted for:</p>
        <Divider />
        <p><b>{option?.name}</b></p>
        <Divider />
      </Container>
    );
  }

  return hasSubmitted ? onSubmitScreen() : poll();
}

export default Poll;