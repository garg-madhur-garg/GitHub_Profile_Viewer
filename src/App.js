import React from 'react';
import './App.css';
import TextBox from './components/TextBox';

function App() {
  return (
    <div className="App">
      <h1>Github Profile Viewer</h1>
      {/* <h4>UserName</h4> */}
      <TextBox />
      {/* <Details userName="Madhur"/> */}
    </div>
  );
}

export default App;
