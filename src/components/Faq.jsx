import React, { useState } from "react";

const Faq = () => {
  const accordionItems = [
    {
      question: "How often is the crypto price data updated?",
      answer:
        "Our crypto price tracker updates data in real-time, providing you with the latest information on cryptocurrency prices, market capitalization, and other relevant data.",
    },
    {
      question: "Which cryptocurrencies are supported by the tracker?",
      answer:
        "Our crypto price tracker supports a wide range of cryptocurrencies, including popular ones like Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and many others. You can find a comprehensive list on our platform.",
    },
    {
      question: "Can I set up price alerts for specific cryptocurrencies?",
      answer:
        "Yes, our platform allows you to set up personalized price alerts for your favorite cryptocurrencies. You will receive notifications when the prices reach your specified threshold, helping you stay informed about market movements.",
    },
    {
      question: "Is the price tracker free to use?",
      answer:
        "Yes, our basic crypto price tracking features are free to use. However, we may offer premium features or subscriptions for advanced analytics and additional functionalities. Check our pricing page for more details.",
    },
    {
      question: "How can I track historical price data for a specific cryptocurrency?",
      answer:
        "Our platform provides historical price charts for each cryptocurrency. You can analyze price trends over different time intervals to make informed decisions. Simply select the desired cryptocurrency and choose the time range you are interested in.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="overflow-hidden bg-gray-800 px-6 -mt-28 py-10 sm:py-14 lg:overflow-visible lg:px-0 flex items-center justify-center">
      <div className="px-20 py-20 w-full ">
        <div className="flex flex-col max-w-7xl mx-auto">
          <h2 className="w-full mr-8 py-10 text-gray-200 text-3xl font-extrabold leading-9 md:w-full">
            Frequently-asked <span className="text-green-500">questions</span>
          </h2>
          <dl className="w-full md:w-full">
            {accordionItems.map((item, index) => (
              <div key={index} className="">
                <button
                  className="w-full max-w-7xl p-4 text-left bg-gray-700 rounded-lg mt-1 text-xl font-semibold text-green-500 hover:bg-gray-600 focus:outline-none transition duration-300 ease-in-out"
                  onClick={() => toggleAccordion(index)}
                >
                  {index + 1}{"."} {item.question}
                </button>
                {activeIndex === index && (
                  <div className="p-4 rounded-lg text-lg bg-gray-400 border font-semibold border-gray-300 mt-1 transition duration-300 ease-in-out">
                    {">"} {item.answer}
                  </div>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
