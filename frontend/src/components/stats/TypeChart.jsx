import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const TypeChart = ({ type }) => {
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

    if (chartRef.current) {
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
            data: [type.issue.length || 0, type.bug.length || 0],
            backgroundColor: ['#FF6384', '#36A2EB'],
            borderWidth: 0,
          },
        ],
      },
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };}
  }, [type]);
  
  return (
    <>
      {type && (
        <div className='bg-white'>
          <canvas ref={chartRef} style={{ width: '150px', height: '150px' }} />
        </div>
      )
      }
    </>
  );
};

export default TypeChart;