import React, { createContext, useState, useEffect, } from 'react' ;

const ExchangeRateContextValue = {
    data: [],
    setData: () => {},
}

const ExchangeRateContext = createContext(ExchangeRateContextValue);

function ExchangeRateContextProvider(props) {
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

      return (
            <ExchangeRateContextProvider value={
                data,
                setData,
            }>
                {props.children}
            </ExchangeRateContextProvider>

      );
}