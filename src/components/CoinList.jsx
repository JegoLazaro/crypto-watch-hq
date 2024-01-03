import React, { useState } from "react";
import styles from "../assets/Globals";
import { SAMPLE_DATA } from "../assets/data/SAMPLE_DATA";
import BgBlur from "./heroComponents/BgBlur";
import BgBlurLow from "./heroComponents/BgBlurLow";
import { Tilt } from "react-tilt";
import Modal from "./CoinListComponent/Modal";

export const Coin = ({ iconUrl, iconText, shadow_Color }) => {
  const [hover, setHover] = useState(false);

  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            60,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          3200,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <Tilt options={defaultOptions} style={{ height: 215, width: 180 }}>
    <div
      className={`${styles.featureCard} bg-gray-00 border-l-2 border-t-2 border-slate-600 relative isolate  transition-transform  ${
        hover ? "scale-110" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxShadow: hover
          ? `1px 3px 20px 4px ${shadow_Color}`
          : "25px 30px 40px rgba(0,3,0,0.5 ) ",
      }}
    >
      <img src={iconUrl} alt="icon" className={`${styles.featureImg}`} />
      <p className={`${styles.featureText} text-lg`}
        style={{
          color: hover
            ?  `${shadow_Color}`
            :  "#fff",
          textShadow: !hover? "none" :"1px 0px 0.5px 0px #000"
        }}
      >
        {iconText}
      </p>
    </div>
    </Tilt>
  );
};

const CoinCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const openModal = (coin) => {
    setSelectedCoin(coin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCoin(null);
  };

  return (
    <div className={`${styles.section} relative isolate  bg-gray-800 px-2 mt-12 lg:px-8 py-32 -my-12`}>
      <BgBlur />
      <div className={`${styles.subSection} items-center justify-start mx-auto max-w-7xl flex-col text-center `}>
        <h1 className="text-5xl p-12 font-bold tracking-wide text-white ">
          Trending <span className="text-green-600">Coins</span>
        </h1>
        <div className={styles.flexWrap}>
          {SAMPLE_DATA.slice(0, 21).map((coin, index) => (
            <a key={index} className="cursor-pointer" onClick={() => openModal(coin)}>
              <Coin
                iconUrl={coin.image}
                iconText={coin.name}
                shadow_Color={coin.shadowColor}
              />
            </a>
          ))}
        </div>
        <BgBlurLow />
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          coin={selectedCoin}
        />
      )}
    </div>
  );
};

export default CoinCards;