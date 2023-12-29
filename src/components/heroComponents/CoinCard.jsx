import React from "react";
import assets from "../../assets";

const CoinCard = ({ coinImg, coinName, coinAbbv,currentPrice }) => {
  return (
    <li className="flex flex-row mb-2 border-green-600">
      <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-green-600 select-none cursor-pointer dark:bg-gray-700 rounded-md flex flex-1 items-center p-2 max-w-2xl min-w-full">
        <div className=" flex flex-col items-center justify-center w-10 h-10 mr-4">
          <a href="#" className="relative block">
            <img
              alt="profil"
              src={coinImg}
              className=" mx-auto ml-2 object-cover rounded-full h-auto w-14 min-w-8 "
            />
          </a>
        </div>
        <div className="flex-1 md:mr-1 ml-4">
          <div className="font-semibold text-gray-600 dark:text-gray-200">
            {coinAbbv}
          </div>
          <div className="font-thin text-sm mr-1 dark:text-gray-300">{coinName}</div>
        </div>
        <div className="ml-1 w-1/2 text-gray-600 dark:text-gray-200 ">
          <h1 className="text-left  hover:text-green-400 text-md">$ {currentPrice.toLocaleString('en-US', { currency: 'USD'})}</h1>
        </div>
        <button className="flex justify-end w-20 text-right pr-5">
          <svg
            width="12"
            fill="currentColor"
            height="12"
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CoinCard;
