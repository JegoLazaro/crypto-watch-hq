import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Market = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const SAMPLE_DATA = [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      current_price: "Loading...",
    },
    {
      id: "etheruem",
      symbol: "eth",
      name: "Etheruem",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      current_price: "Loading...",
    },
    {
      id: "tether",
      symbol: "usdt",
      name: "Tether",
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
      current_price: "Loading...",
    },
    {
      id: "binance coin",
      symbol: "bnb",
      name: "Binance Coin",
      image:
        "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
      current_price: "Loading...",
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image:
        "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
      current_price: "Loading...",
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "XRP",
      image:
        "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
      current_price: "Loading...",
    },
  ];
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=7d&locale=en"
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

  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="px-6 pt-14 lg:px-8 py-5 bg-gray-800">
      <h1 className="text-white text-4xl p-5">Market</h1>
      <div className="py-10 max-w-6xl mx-auto flex px-5 flex-row flex-wrap items-center bg-slate-600 ">
        <table className="border-2 w-full border-blue-500 ">
          <thead>
            <tr className="text-left ">
              <th className="pl-3 text-2xl">Coin</th>
              <th className="pl-3 text-2xl">Price</th>
              <th className="pl-2 text-2xl">7d Per Change</th>
              <th className="pl-3 text-2xl">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item) => {
              return (
                <tr className="">
                  <td className="flex flex-row p-2">
                    <img src={item.image} className="w-10 h-auto" />
                    <h1 className="px-3 self-center">
                      {item.name} ({item.symbol.toUpperCase()})
                    </h1>
                  </td>
                  <td>
                  $ {item.current_price.toLocaleString('en-US', { currency: 'USD'})}
                </td>
                  <td>{item.name}</td>
                  <td>$ {item.market_cap.toLocaleString('en-US', { currency: 'USD'})}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Market;
