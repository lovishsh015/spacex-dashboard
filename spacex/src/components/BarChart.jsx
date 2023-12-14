import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const BarChart = () => {
  const data = useSelector((state) => state.dropdown.rocketData)
  const chartData = {
    labels: ['Success', 'Failure'],
    datasets: [
      {
        label: 'Rocket Launch Data',
        backgroundColor: ['#36A2EB', '#FF6384'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [data.successCount, data.failureCount],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: data.totalCount, // Set max to the total count for better visualization
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
