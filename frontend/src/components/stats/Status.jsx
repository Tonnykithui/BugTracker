import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
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
          text: 'Status',
          font: { size: 18 },
        },
      },
    };

    const myChartRef = chartRef.current.getContext('2d');

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(myChartRef, {
      type: 'pie',
      data: {
        labels: ['Open', 'Closed', 'In Progress'],
        datasets: [
          {
            data: [10, 20, 15],
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
    <div className='bg-white'>
      <canvas ref={chartRef} style={{ width: '150px', height: '150px' }}/>
    </div>
  );
};

export default PieChart;