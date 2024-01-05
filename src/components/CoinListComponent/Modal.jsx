import React from "react";
import Chart from "../MarketComponents/Chart";

const Modal = ({ isOpen, onClose, coin, sparkline, priceChange }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-95"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="mx-auto bg-gray-700   shadow-lg w-full rounded-2xl">
            <div className="h-auto max-w-2xl mx-auto p-3 overflow-hidden bg-gray-800 py-20">
              <div className="flex flex-row justify-between">
               
                <h2 className="text-2xl text-gray-300 font-bold mb-4">
                  {coin.name} ({coin.symbol.toUpperCase()})
                </h2>
                <button
                  type="button"
                  className="inline-flex justify-center  px-3 py-3 text-sm font-medium bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-400 text-red-700"
                  onClick={onClose}
                >
                  X
                </button>
              </div>
              <div className=" grid justify-start">
              <img
                src={coin.image}
                alt={coin.name}
                className="w-20 h-20 mx-auto mb-4 "
              />
              </div>
              <Chart
                sparkline={coin.sparkline_in_7d}
                priceChange={coin.price_change_percentage_7d_in_currency}
                isModal
              />
              <h1 className="text-3xl text-gray-300 tracking-wide">
                ${" "}
                {coin.current_price.toLocaleString("en-US", {
                  currency: "USD",
                })}
              </h1>
              <h1 className="text-xl tracking-wide">
              {coin.market_cap_change_percentage_24h.toFixed(2) > 0 ? (
                      <span style={{ color: "#34c759" }}>
                        + {coin.market_cap_change_percentage_24h.toFixed(2)}%
                      </span>
                    ) : (
                      <span style={{ color: "#ff3b30" }}>
                        {coin.market_cap_change_percentage_24h.toFixed(2)}%
                      </span>
                    )}
              </h1>
            </div>
            <div className="p-5 ">
              <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="h-14 border-2 border-gray-200  rounded">
                  <h1 className="pl-2 text-gray-200">
                    Market Cap:{" "}
                    {"$" + coin.market_cap.toLocaleString("en-US", {
                      currency: "USD",
                    })}
                  </h1>
                </div>
                <div className="h-14 border-2 border-gray-200 rounded">
                  <h1 className="pl-2 text-gray-200">
                    Market Vol: {coin.total_volume.toLocaleString("en-US")}
                  </h1>
                </div>
                <div className="h-14 border-2 border-gray-200  rounded">
                  <h1 className="pl-2 text-gray-200">
                    ATH: ${" "}
                    {coin.ath.toLocaleString("en-US", {
                      currency: "USD",
                    })}
                  </h1>
                </div>
                <div className="h-8 col-span-2 border-2 border-gray-200 rounded">
                  <h1 className="pl-2 text-gray-200">
                    24h High: ${" "}
                    {coin.high_24h.toLocaleString("en-US", {
                      currency: "USD",
                    })}
                  </h1>
                </div>
                <div className="h-8 border-2 border-gray-200 rounded  ">
                  <h1 className="pl-2 text-gray-200">
                    24h Low: ${" "}
                    {coin.low_24h.toLocaleString("en-US", {
                      currency: "USD",
                    })}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
