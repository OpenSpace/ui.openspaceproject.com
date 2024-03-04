import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Paper
} from '@mui/material';

import Idle from './components/Idle';
import Poll from './components/Poll';
import VisitorCodeInput from './components/VisitorCodeInput';

import logo from './assets/openspace-horiz-logo.png';

const testoptions = [
  {
    key: "mars",
    name: "Mars",
    color: "rgb(200, 100, 100)"
  },
  {
    key: "jupiter",
    name: "Jupiter",
    color: "rgb(180 209 101)"
  },
  {
    key: "saturn",
    name: "Saturn",
    color: "rgb(129 105 105)"
  }
]

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

enum Mode {
  EnterCode = "code",
  Idle = "idle",
  Poll = "poll"
}

function App() {
  const [mode, setMode] = useState<Mode>(Mode.Poll);

  const topBarHeight = 5;
  const bottomBarHeight = 8;
  const remainingHeight = 100 - topBarHeight - bottomBarHeight;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static" sx={{ height: `${topBarHeight}%` }}>
          <Toolbar/>
        </AppBar>
        <Container sx={{ display: 'flex', flexDirection: 'column', height: `${remainingHeight}%`, justifyContent: 'center' }}>
          { mode === Mode.EnterCode && <VisitorCodeInput></VisitorCodeInput> }
          { mode === Mode.Idle && <Idle></Idle> }
          { mode === Mode.Poll && <Poll options={testoptions}></Poll>}
        </Container>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: `${bottomBarHeight}%` }}>
          <Box
            component='img'
            sx={{height: '100%', padding: '1.5vh'}}
            alt='OpenSpace Logo'
            src={logo}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
