import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const TypeChart = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'bottom',
      },
      plugins: {
        title: {
          display: true,
          text: 'Type',
          font: { size: 18 },
        },
      },
    };

    console.log('chartOptions:', chartOptions);
    const myChartRef = chartRef.current.getContext('2d');

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: ['Issue', 'Bug'],
        datasets: [
          {
            data: [10, 20],
            backgroundColor: ['#FF6384', '#36A2EB'],
            borderWidth: 0,
          },
        ],
      },
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className='bg-white'>
      <canvas ref={chartRef} style={{ width: '150px', height: '150px' }}/>
    </div>
  );
};

export default TypeChart;