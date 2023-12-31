import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Pagination from "./MarketComponents/Pagination";
import { SAMPLE_DATA } from "../assets/data/SAMPLE_DATA";

const Market = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //   const SAMPLE_DATA = [
  //     {
  //       id: "bitcoin",
  //       symbol: "btc",
  //       name: "Bitcoin",
  //       image:
  //         "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  //       current_price: "Loading...",
  //     },
  //     {
  //       id: "etheruem",
  //       symbol: "eth",
  //       name: "Etheruem",
  //       image:
  //         "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  //       current_price: "Loading...",
  //     },
  //     {
  //       id: "tether",
  //       symbol: "usdt",
  //       name: "Tether",
  //       image:
  //         "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
  //       current_price: "Loading...",
  //     },
  //     {
  //       id: "binance coin",
  //       symbol: "bnb",
  //       name: "Binance Coin",
  //       image:
  //         "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
  //       current_price: "Loading...",
  //     },
  //     {
  //       id: "cardano",
  //       symbol: "ada",
  //       name: "Cardano",
  //       image:
  //         "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
  //       current_price: "Loading...",
  //     },
  //     {
  //       id: "ripple",
  //       symbol: "xrp",
  //       name: "XRP",
  //       image:
  //         "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
  //       current_price: "Loading...",
  //     },
  //   ];
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=true&price_change_percentage=7d&locale=en"
      )
      .then(({ data: responseData }) => {
        // console.log('data=>> ',data);
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
    console.log("DATA =>> ", data);
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="px-6 pt-14 lg:px-8 py-5 bg-gray-800">
      <h1 className="text-white text-5xl p-5 justify-center max-w-7xl mx-auto tracking-wide font-bold">
        Market
      </h1>
      <div className="py-10 max-w-6xl mx-auto flex px-5 flex-row flex-wrap items-center bg-gray-700 rounded-xl border-4 border-green-700">
        <table className="w-full border-green-700  mb-5">
          <thead>
            <tr className="text-left border-b-4 border-green-500">
              <th className="pl-3 text-2xl text-green-500">Coin</th>
              <th className="pl-3 text-2xl text-gray-300">Price</th>
              <th className="pl-2 text-2xl text-gray-300">7d</th>
              <th className="pl-3 text-2xl text-gray-300">Market Cap</th>
              <th className="pl-3 text-2xl text-gray-300">Last 7D</th>
            </tr>
          </thead>

          <tbody>
            {currentTableData.map((item) => {
              return (
                <tr className="hover:bg-gray-600 border-b-4 cursor-pointer text-white">
                  <td className="flex flex-row p-2 ">
                    <img src={item.image} className="w-10 h-auto" />
                    <h1 className="px-3 self-center text-lg font-semibold">
                      {item.name} ({item.symbol.toUpperCase()})
                    </h1>
                  </td>
                  <td className="text-lg font-semibold tracking-wide">
                    ${" "}
                    {item.current_price.toLocaleString("en-US", {
                      currency: "USD",
                    })}
                  </td>
                  <td>{
                  item.market_cap_change_percentage_24h.toFixed(2) > 0 ? <span style={{color : "#34c759"}}>{item.market_cap_change_percentage_24h.toFixed(2)}%</span> : <span style={{color : "#ff3b30"}}>{item.market_cap_change_percentage_24h.toFixed(2)}%</span> 
                  }</td>
                  <td className=" tracking-wide">
                    ${" "}
                    {item.market_cap.toLocaleString("en-US", {
                      currency: "USD",
                    })}
                  </td>
                  <td className="border-l-2 pl-2 mx-auto">
                    SPARKLINE
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          className="pagination-bar mx-auto "
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
