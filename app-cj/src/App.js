import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hulu from './Hulu.js'

function App() {
  let data = {
    Title:'Bee Movie',
    Season:'1',
    Genre:'Action/Adventure',
    Rating:'pg'
  }
  return (
    <div className="App">
      {/* properties must be passed as `propertyName = {variable}` */}
         <Hulu data> </Hulu>
    </div>
  );
}

export default App;
