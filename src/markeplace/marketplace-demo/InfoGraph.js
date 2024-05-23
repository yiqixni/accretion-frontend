import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; 

export default function InfoGraph () {
    
    const stockData = generateStockData(50000); // Generate data for 10 seconds    

    const chartData = {
        labels: stockData.map(entry => new Date(entry.timestamp).toLocaleTimeString()),
        datasets: [
          {            
            data: stockData.map(entry => entry.price),
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'green',
            borderWidth: 3,
            pointRadius: 0,
          },
        ],
    };

    // const chartOptions = {
    //     maintainAspectRatio: false, // Allow chart to take full width
    //     legend: { display: false }, // Hide legend
    //     scales: {
    //       xAxes: [{
    //         gridLines: {display: false}                      
    //       }],
    //       yAxes: [
    //         {
    //           display: false, // Hide y-axis labels              
    //         },
    //         {
    //             gridLines: {
    //                 drawBorder: false,
    //             }
    //         }
    //       ],
    //     },
    //     tooltips: {
    //       enabled: true,
    //       mode: 'nearest',
    //       intersect: false,
    //       callbacks: {
    //         title: () => '', // Hide tooltip title
    //         label: (tooltipItem) => {
    //           const label = chartData.datasets[0].label || '';
    //           const value = tooltipItem.yLabel;
    //           return `${label}: ${value}`; // Display custom tooltip label
    //         },
    //       },
    //     },
    //   };

    const chartOptions = {
        legend: {display: false}, 
        scales: {
            x: {
                display: false, 
            }, 
            y: {
                display: false,
            }
        }, 
        tooltips: {
            enabled: true, 
            mode: 'index', 
            intersect: false,             
        }
    }
    
    return <Line 
                data={chartData} 
                options={chartOptions}
                style={{border: "solid white", width: "100%"}}
            />;
}

function generateStockData(duration = 10000) { // 10 seconds in milliseconds
    const data = [];
    const startingPrice = 100; // Adjust starting price as needed
  
    for (let i = 0; i < duration; i += 1000) { // Generate data points every second
      const change = Math.random() * 2 - 1; // Random change between -1 and 1
      const newPrice = startingPrice + change * 0.5 + i/10000; // Adjust volatility with multiplier
  
      data.push({
        timestamp: Date.now() + i,
        price: newPrice,
      });
    }
  
return data;    
}
  
  // Generate order book data with random buy/sell orders
function generateOrderBookData() {
    const orders = [];
  
    for (let i = 0; i < 10; i++) { // Generate 10 orders
      const isBuy = Math.random() < 0.5;
      const quantity = Math.floor(Math.random() * 1000) + 100; // Random quantity between 100 and 1100
      const price = Math.random() * 0.5 + 99.5; // Random price around current market price
  
      orders.push({
        id: i,
        side: isBuy ? 'buy' : 'sell',
        quantity,
        price,
      });
    }
  
    return orders;
}

export { generateStockData, generateOrderBookData };