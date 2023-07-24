import logo from './logo.svg';
import './App.css';
import Count from './props/Count';
import './props/Count.css'
import data from './props/Data';
import { useState } from 'react';

function App() {

  const [no ,setNo]=useState(0);
  const Add = ()=>{
    setNo(
      no+1
    )
  }
  return (
    <>
      <Count record={data} button={Add} no={no}/>
    </>
  );
}

export default App;
