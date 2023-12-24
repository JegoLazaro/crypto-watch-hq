import React, { useRef, useMemo, useState, useEffect } from "react";
import assets from "../assets";
import CoinCard from "./heroComponents/CoinCard";
import BgBlur from "./heroComponents/BgBlur";
import BgBlurLow from "./heroComponents/BgBlurLow";
import axios from "axios";

const HeroSection = () => {
  const [data, setData] = useState([]);
  const [selectedCoinData, setSelectedCoinData] = useState(null);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=en")
    .then(async (res) => {
      // console.log("Response: ", res);
      await setData(res.data);
    })
    .catch((e) => {
      console.log("ERROR => " + e);
    })
  }, [])

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-800">
      <BgBlur />
      <div className="mx-auto sm:max-w-6xl py-24 sm:py-28 lg:py-36 flex flex-col md:flex-row justify-between ">
        <div className=" lg:text-left sm:text-center left-div w-1/2 ">
          <h1 className="text-4xl font-bold tracking-wider text-white sm:text-6xl">
            Welcome to <span className=" text-green-600">Crypto Watch HQ</span>
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
        <div className="right-div w-1/2 ">
          <h1 className="text-4xl text-center font-bold tracking-wider text-white sm:text-5xl">
            Trending <span className=" text-green-600">Coins</span>
          </h1>
          <div className="mt-4 flex flex-col justify-start w-full  mx-auto">
            <ul className="flex-wrap max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-2">
              {/* <CoinCard
                coinAbbv={"BTC"}
                coinImg={assets.btc}
                coinName={"Bitcoin"}
              />
              <CoinCard
                coinAbbv={"ETH"}
                coinImg={assets.eth}
                coinName={"Ethereum"}
              />
              <CoinCard
                coinAbbv={"USDT"}
                coinImg={assets.tether}
                coinName={"Tether"}
              />
              <CoinCard
                coinAbbv={"ADA"}
                coinImg={assets.cardano}
                coinName={"Cardano"}
              />
              <CoinCard
                coinAbbv={"XRP"}
                coinImg={assets.xrp}
                coinName={"Ripple"}
              />
              <CoinCard
                coinAbbv={"BNB"}
                coinImg={assets.bnb}
                coinName={"Binance"}
              />  */}

{
  data.slice(0, 6).map((item) => (
    <CoinCard
      key={item.id} // Assuming each coin has a unique ID
      coinAbbv={item.symbol}
      coinImg={item.image}
      coinName={item.name}
    />
  ))
}
            </ul>
          </div>
        </div>
      </div>
      <BgBlurLow />
    </div>
  );
};

export default HeroSection;
