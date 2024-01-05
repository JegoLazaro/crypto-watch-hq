import {
  ChartBarSquareIcon,
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import assets from "../assets";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-800 px-6 mt-12 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-500">
                Crypto Watch HQ
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                Real-Time Price Tracking
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
                Stay ahead of the market with real-time cryptocurrency price
                updates. Our platform leverages the Coingecko API to provide
                accurate and up-to-date information on a wide range of
                cryptocurrencies, enabling you to make informed investment
                decisions.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-32 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-200/10 sm:w-[57rem]"
            src={assets.hero}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg leading-7 text-gray-400 lg:max-w-lg">
              <p>
                Efficiently manage your crypto portfolio with our user-friendly
                tools. Track your holdings, monitor gains and losses, and gain
                valuable insights into your overall investment performance.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-100">
                    <strong className="font-semibold text-green-600">
                      Secure Trading.
                    </strong>{" "}
                    Your security is paramount. Our platform ensures a safe
                    environment for exploring and interacting with
                    cryptocurrency data through robust security measures.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartBarIcon
                    className="mt-1 h-5 w-5 flex-none text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-100">
                    <strong className="font-semibold text-green-600">
                      Interactive Charts.
                    </strong>{" "}
                    Analyze market trends seamlessly with React Apex Charts,
                    gaining insights from interactive historical data for
                    strategic decisions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DevicePhoneMobileIcon
                    className="mt-1 h-5 w-5 flex-none text-green-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-100">
                    <strong className="font-semibold text-green-600">
                      Mobile Responsive.
                    </strong>{" "}
                    Track crypto seamlessly on any device with our mobile-responsive website. Stay connected to the market anytime, anywhere.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-200">
                Interactive and User-Friendly{" "}
                <span className="text-green-500">Interface</span>
              </h2>
              <p className="mt-4 text-gray-400">
                Navigate our platform with ease through an intuitive and
                user-friendly interface. Whether you are a seasoned trader or a
                beginner, our design ensures a seamless and enjoyable
                experience.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-200">
                Trade Crypto <span className="text-green-500">With Us!</span>
              </h2>
              <p className="mt-4 text-gray-400">
                Embark on your crypto journey with confidence, armed with the
                tools and features you need for successful and informed
                decision-making. Start exploring the world of cryptocurrencies
                with our <span className="text-green-500">Crypto Watch HQ</span>{" "}
                today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
