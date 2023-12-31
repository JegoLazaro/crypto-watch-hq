import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const Chart = ({sparkline, priceChange}) => {
    const[chartOptions] = useState({
        series:[{
            data: [...sparkline.price],
        }],
        chart: {
            type: "area",
            height: 120,
            sparkline: {enabled: true},
            animation: {enabled: false},
        },
        tooltip: {enabled: false},
        stroke: {width: 1},
        colors: [chartColor()]
    })

    function chartColor() {
        if(priceChange <= 0) {
            return "#ff3b30";
        } else {
            return "#34c759"
        }
    }
  return (
    <ReactApexChart options={chartOptions} series={chartOptions.series} className=" lg:w-20 md:w-16 sm:w-10 mx-auto"/>
  )
}

export default Chart