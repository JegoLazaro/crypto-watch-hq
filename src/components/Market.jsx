import React, { useState, useEffect } from 'react'
import axios from "axios";

const Market = () => {
    const [data, setData] = useState([]);

    const SAMPLE_DATA = [
        {
          id:'bitcoin',
          symbol: 'btc',
          name:'Bitcoin',
          image:
            'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            current_price: "Loading...",
        },
        {
          id:'etheruem',
          symbol: 'eth',
          name:'Etheruem',
          image:
          'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            current_price: "Loading...",
        },
        {
          id:'tether',
          symbol: 'usdt',
          name:'Tether',
          image:
            'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
            current_price: "Loading...",
        },
        {
          id:'binance coin',
          symbol: 'bnb',
          name:'Binance Coin',
          image:
            'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615',
            current_price: "Loading...",
        },
        {
          id:'cardano',
          symbol: 'ada',
          name:'Cardano',
          image:
          'https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860',
            current_price: "Loading...",
        },
        {
          id:'ripple',
          symbol: 'xrp',
          name:'XRP',
          image:
            'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731',
            current_price: "Loading...",
        },
      ]
    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=en"
          )
          .then(({ data: responseData }) => {
            setData(responseData);
            setLoading(false);
          })
          .catch((error) => {
            console.log("ERROR => ", error);
            setLoading(true); // Set loading to false on error
          });
      }, []);
  return (
    <div className="px-6 pt-14 lg:px-8 bg-gray-800">
        <h1 className='text-white text-4xl p-5'>
            Market
        </h1>
        <div className='py-10 max-w-4xl bg-white'>
        <table className='border-2 border-blue-500 '>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_DATA.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.symbol.toUpperCase()}</td>
                <td>{item.name}</td>
                <td>{item.current_price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    </div>
  )
}

export default Market