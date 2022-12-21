import React from 'react';
// import { Connector } from 'mqtt-react-hooks';

import Charts from './components/Charts';
import './App.css';

function App() {
  return (
    <>
    {/* <Connector brokerUrl="wss://test.mosquitto.org:1884"> */}
      <Charts />
    {/* </Connector> */}
    </>
  );
}

export default App;
