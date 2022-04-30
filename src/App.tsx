import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainComponent } from './components/MainComponent/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/less/font-awesome.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainComponent />
      </header>
    </div>
  );
}

export default App;
