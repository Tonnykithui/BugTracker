import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ ticket }) => {
  
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

    if (chartRef.current) {
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
            data: [ticket.allOpen.length || 0, ticket.allClosed.length || 0, ticket.allInProgress.length || 0],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            borderWidth: 0,
          },
        ],
      },
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };}
  }, [ticket]);

  return (
    <>
      {
        ticket && (
          <div className='bg-white'>
            <canvas ref={chartRef} style={{ width: '150px', height: '150px' }} />
          </div>
        )
      }
    </>
  );
};

export default PieChart;