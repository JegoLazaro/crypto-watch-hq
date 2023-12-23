import React from "react";
import assets from "../assets";
import CoinCard from "./heroComponents/CoinCard";

const HeroSection = () => {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-800">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#20ff24] to-[#0099e6] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-28 lg:py-36">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"></div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-wider text-white sm:text-6xl">
              Welcome to Crypto Watch HQ
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
            <div className=" justify-between  mt-8 flex  gap-x-16">
              <div class="container flex flex-col items-center justify-center w-full mx-auto">
                <ul class="flex flex-col">
                  <CoinCard coinAbbv={"BTC"} coinImg={assets.btc} coinName={"Bitcoin"}/>
                  <CoinCard coinAbbv={"ETH"} coinImg={assets.eth} coinName={"Ethereum"}/>
                  <CoinCard coinAbbv={"USDT"} coinImg={assets.tether} coinName={"Tether"}/>
                </ul>
              </div>

              <div class="container flex flex-col items-center justify-center w-full mx-auto">
                <ul class="flex flex-col">
                  <CoinCard coinAbbv={"ADA"} coinImg={assets.cardano} coinName={"Cardano"}/>
                  <CoinCard coinAbbv={"XRP"} coinImg={assets.xrp} coinName={"Ripple"}/>
                  <CoinCard  coinAbbv={"BNB"} coinImg={assets.bnb} coinName={"Binance"}/>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#1201fd] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
