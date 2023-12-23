import React from "react";
import assets from "../assets";
import CoinCard from "./heroComponents/CoinCard";
import BgBlur from "./heroComponents/BgBlur";
import BgBlurLow from "./heroComponents/BgBlurLow";

const HeroSection = () => {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-800">
        <BgBlur />
        <div className="mx-auto sm:max-w-2xl py-24 sm:py-28 lg:py-36">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-wider text-white sm:text-6xl">
              Welcome to{" "}
              <span className=" text-green-600">Crypto Watch HQ</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Your Gateway to Seamless Crypto Monitoring! Explore real-time
              updates, historical data, and insightful analytics for the
              ever-evolving world of cryptocurrencies.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Start tracking, analyzing, and optimizing your crypto portfolio
              today!
            </p>
            <div className="flex flex-col md:flex-row justify-between mt-8 gap-x-4">
              <div className="flex flex-col items-center justify-center w-full md:w-1/2 mx-auto">
                <ul className="flex flex-col">
                  <CoinCard
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
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center w-full md:w-1/2 mx-auto mt-4 md:mt-0">
                <ul className="flex flex-col">
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
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <BgBlurLow />
      </div>
    </div>
  );
};

export default HeroSection;
