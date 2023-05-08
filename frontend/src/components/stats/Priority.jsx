import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const PolarAreaChart = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        display: false,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
      plugins: {
        title: {
          display: true,
          text: 'Priority',
          font: { size: 18 },
        },
      },
    };

    const myChartRef = chartRef.current.getContext('2d');

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(myChartRef, {
      type: 'polarArea',
      data: {
        labels: ['High (10)', 'Medium (5)', 'Low (1)'],
        datasets: [
          {
            data: [10, 5, 1],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
    <div className='bg-white w-full'>
      {/* style={{ width: '150px', height: '150px' }} */}
      <canvas ref={chartRef} className='mx-auto max-w-full lg:h-32 lg:w-32 md:h-16 md:w-16' />
    </div>
  );
};

export default PolarAreaChart;