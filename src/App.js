import React from 'react';
import './App.css';

import Header from './components/header/header';
import Container from './components/content/content';
import DataInput from './components/data-input/input';

import BarGraph from './components/graphs/bargraph/bargraph';

const bgdata = [
  {label: "apples", amt: 10},
  {label: "bananas", amt: 20},
  {label: "kiwis", amt: 8},
  {label: "pears", amt: 12},
  {label: "oranges", amt: 3},
  {label: "pineapple", amt: 21},
  {label: "dragonfruit", amt: 16},
]


function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <DataInput />
        <BarGraph data={bgdata}/>
      </Container>
    </div>
  );
}

export default App;
