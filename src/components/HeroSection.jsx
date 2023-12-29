import React, { useState, useEffect } from "react";
import assets from "../assets";
import CoinCard from "./heroComponents/CoinCard";
import BgBlur from "./heroComponents/BgBlur";
import BgBlurLow from "./heroComponents/BgBlurLow";
import axios from "axios";

const HeroSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-800">
      <BgBlur />
      <div className="mx-auto sm:max-w-6xl py-24 sm:py-28 lg:py-36 flex flex-col md:flex-row">
        <div className="lg:text-left sm:text-center left-div w-full md:w-1/2">
          <h1 className="text-4xl font-bold tracking-wider text-white sm:text-6xl">
            Welcome to <span className="text-green-600">Crypto Watch HQ</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-400">
            Your Gateway to Seamless Crypto Monitoring! Explore real-time
            updates, historical data, and insightful analytics for the
            ever-evolving world of cryptocurrencies.
          </p>
          <p className="mt-6 text-md leading-8 text-gray-400">
            Start tracking, analyzing, and optimizing your crypto portfolio
            today!
          </p>
        </div>
        <div className="right-div w-full md:w-1/2">
          <h1 className="text-4xl text-center font-bold tracking-wider text-white sm:text-5xl">
            Trending <span className="text-green-600">Coins</span>
          </h1>
          <div className="mt-4 flex flex-col justify-start w-full mx-auto">
            {loading ? (
              <ul className="flex-wrap max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-2">
              {SAMPLE_DATA.map((item) => (
                <CoinCard
                  key={item.id}
                  coinAbbv={item.symbol.toUpperCase()}
                  coinImg={item.image}
                  coinName={item.name}
                  currentPrice={item.current_price}
                />
              ))}
            </ul>
            ) : (
              <ul className="flex-wrap max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-2">
                {data.slice(0, 6).map((item) => (
                  <CoinCard
                    key={item.id}
                    coinAbbv={item.symbol.toUpperCase()}
                    coinImg={item.image}
                    coinName={item.name}
                    currentPrice={item.current_price}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <BgBlurLow />
    </div>
  );
};

export default HeroSection;
