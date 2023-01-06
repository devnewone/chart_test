import React from 'react';
// import { Connector } from 'mqtt-react-hooks';

import Charts from './components/Charts';
import './App.css';

function App() {
  return (
    <>
    {/* mqtt 커넥터는 인스턴스를 초기화할 루트 구성요소를 래핑한다 */}
    {/* <Connector brokerUrl="wss://test.mosquitto.org:1884">
      <Status />
    </Connector> */}
      <Charts />
    </>
  );
}

export default App;
