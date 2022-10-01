import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  let [p,setP] = useState([])
  let [n,setN] = useState(1)
  let tp
  function gen(){
    // console.log(Math.floor(Math.random()*data.length))
    tp = []
    for(let i=0;i<n;i++){
      tp.push(data[Math.floor(Math.random()*data.length)])
    }
    setP(tp)
  }
  return (
    <div className="App">
      <nav>Lorem ipsum Generator</nav>
      <div className='in'>
        <input type="number" onChange={e=>setN(e.target.value)} placeholder='no.of paragraphs..' ></input>
        <button onClick={gen}>Generate</button>
      </div>
      {p.length !== 0 && <div className='content'>
        {p.map(para=>{
          return(
            <>
              <p>{para}</p>
              <br />
            </>
          )
        })}
      </div>}
    </div>
  );
}

export default App;
