import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ hits: [] })

async function fetchData(){
  const response = await axios(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  setData(response.data);
}

//useEffect logic
//useEffect- cannot be asynchronous so we make async function outside useEffect(())
useEffect(() =>{
  fetchData()
  console.log('running ....') //If we leave it like this, it will run constantly


  //When we add an [], it only renders on the first -
  //with [] array - its called First Mount
  //Without [] - it called always
},[])

  return (
    <ul>
      {data.hits.map((item)=>{
        return(
        <li key = {item.objectID}>
          <a href= {item.url}>{item.title} </a>
        </li>)
      })}
    </ul>
  );
}

export default App;
