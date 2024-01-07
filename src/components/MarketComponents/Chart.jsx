import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const Chart = ({sparkline, priceChange, isModal}) => {
    const[chartOptions] = useState({
        series:[{
            name: "Price",
            data: [...sparkline.price],
        }],
        chart: {
            type: "line",
            height: 120,
            sparkline: {enabled: true},
            animation: {enabled: true},
        },
        title: {
            text: isModal ? 'Weekly Chart (7d)' : '',
            align: 'left',
          },
        tooltip: {enabled: isModal ? true : false},
        stroke: {
            width: 2
        },
        colors: [chartColor()],
        grid: {
            show: isModal ? true :false,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            yaxis: {
                lines: {
                    show: true
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.5
            },  
        }
    })

    function chartColor() {
        if(priceChange <= 0) {
            return "#ff3b30";
        } else {
            return "#34c759"
        }
    }
  return (
    <ReactApexChart options={chartOptions} series={chartOptions.series} className={` ${isModal ? "lg:w-full " : "lg:w-20 md:w-16 w-16 sm:w-10" }  mx-auto`}/>
  )
}

export default Chart