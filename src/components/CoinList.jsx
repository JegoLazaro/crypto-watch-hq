import React, { useState } from "react";
import styles from "../assets/Globals";
import { SAMPLE_DATA } from "../assets/data/SAMPLE_DATA";
import BgBlur from "./heroComponents/BgBlur";
import BgBlurLow from "./heroComponents/BgBlurLow";

export const FeatureCard = ({ iconUrl, iconText, shadow_Color }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${styles.featureCard} bg-gray-00 border-l-2 border-t-2 border-slate-600 relative isolate  transition-transform  ${
        hover ? "scale-110" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxShadow: hover
          ? `1px 3px 20px 4px ${shadow_Color}`
          : "25px 30px 40px rgba(0,0,0,0.5 ) ",
      }}
    >
      <img src={iconUrl} alt="icon" className={`${styles.featureImg}`} />
      <p className={`${styles.featureText}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
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
  );
};

const SkillCards = () => {

  return (
    <div className={`${styles.section} relative isolate  bg-gray-800 px-2 mt-12 lg:px-8 py-32 -my-12`}>
        <BgBlur/>
      <div className={`${styles.subSection} items-center justify-start mx-auto max-w-7xl flex-col text-center `}>
        
        <h1 className="text-5xl p-12 font-bold tracking-wide text-white ">
            Trending Coins
        </h1>
        <div className={styles.flexWrap}>
          {SAMPLE_DATA.slice(0,21).map((coin, index) => (
            <a key={index} className="cursor-pointer">
              <FeatureCard
                iconUrl={coin.image}
                iconText={coin.name}
                shadow_Color={coin.shadowColor}
              />
            </a>
          ))}
        </div>
        <BgBlurLow />
      </div>
    </div>
  );
};

export default SkillCards;