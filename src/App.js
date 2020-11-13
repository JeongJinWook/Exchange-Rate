import React, { useEffect, useState, } from 'react';
import './App.css';

const authkey = 'OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9'

function App() {
  const [data, setData] = useState([]);

  useEffect(async() => {
    fetch(
      `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${'2020-11-11'}&data=${'AP01'}`)
    .then(
      response=>{
        return response.json()
      }
    ).then(
      responseJSON => {
        console.log('responseJSON: ', responseJSON);
        setData(responseJSON)
      }
    )
  }, []);

  useEffect(()=>{
    console.log('data: ', data);
  }, [data]);
  
  return(
    <div>
      {data.map((currency, cI) => {
        return (
          <div key={cI}>
            {currency.cur_nm} ({currency.cur_unit}): {currency.bkpr}
          </div>
        );

      })}
    </div>
  );
}

export default App;