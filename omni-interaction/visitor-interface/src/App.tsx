import React, { useRef, useState } from 'react';
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

// const testdata = {
//   identifier: "test_poll",
//   description: "Vart vill du åka härnäst?",
//   options: [
//     {
//       key: "mars",
//       name: "Mars",
//       color: "rgb(200, 100, 100)"
//     },
//     {
//       key: "jupiter",
//       name: "Jupiter",
//       color: "rgb(180 209 101)"
//     },
//     {
//       key: "saturn",
//       name: "Saturn",
//       color: "rgb(129 105 105)"
//     }
//   ]
// }

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
  const [mode, setMode] = useState<Mode>(Mode.EnterCode);
  const [data, setData] = useState<any>(undefined);

  const socket = useRef<WebSocket | null>(null);

  function connectToServer(code: string) {
    const url = `wss://omni.itn.liu.se/ws/socket-server/`;
    socket.current = new WebSocket(url);

    socket.current.onopen = () => {
      if (socket.current) {
        socket.current.send(JSON.stringify({ token: code }));
      }
    };

    socket.current.onclose = () => {
      setMode(Mode.EnterCode);
      socket.current = null;
    };

    socket.current.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      console.log(data);

      if (data.type === "server_authorized") {
        setMode(Mode.Idle);
      }
      if (data.type === "server_disconnect") {
        // confirm(data.message);
      }
      if (data.type === "setScenario") {
        const payload = data.payload;
        if (Object.values(Mode).includes(payload.inputMode)) {
          setData(payload);
          setMode(payload.inputMode);
        } else {
          throw Error(`Unknown input mode: ${payload.inputMode}`);
        }
      }
      if (data.type === "setIdle") {
        setMode(Mode.Idle);
      }
    };
  }

  function sendData(data: Object) {
		if (socket.current) {
      const message = {
        type: 'openspace',
        ...data
      };
      console.log(message);
			socket.current.send(JSON.stringify(message));
		}
  }

  const topBarHeight = 5;
  const bottomBarHeight = 8;
  const remainingHeight = 100 - topBarHeight - bottomBarHeight;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static" sx={{ height: `${topBarHeight}%` }}>
          <Toolbar />
        </AppBar>
        <Container sx={{ display: 'flex', flexDirection: 'column', height: `${remainingHeight}%`, justifyContent: 'center' }}>
          {mode === Mode.EnterCode && <VisitorCodeInput onEnter={connectToServer}/>}
          {mode === Mode.Idle && <Idle />}
          {mode === Mode.Poll && <Poll data={data} sendVoteData={sendData} />}
        </Container>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: `${bottomBarHeight}%` }}>
          <Box
            component='img'
            sx={{ height: '100%', padding: '1.5vh' }}
            alt='OpenSpace Logo'
            src={logo}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
