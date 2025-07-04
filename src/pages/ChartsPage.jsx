import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

// Import chart components
import BarChart01 from '../charts/BarChart01';
import BarChart02 from '../charts/BarChart02';
import BarChart03 from '../charts/BarChart03';
import BarChart04 from '../charts/BarChart04';
import BarChart05 from '../charts/BarChart05';
import BarChart06 from '../charts/BarChart06';
import LineChart01 from '../charts/LineChart01';
import LineChart02 from '../charts/LineChart02';
import LineChart03 from '../charts/LineChart03';
import LineChart04 from '../charts/LineChart04';
import LineChart05 from '../charts/LineChart05';
import LineChart06 from '../charts/LineChart06';
import LineChart07 from '../charts/LineChart07';
import LineChart08 from '../charts/LineChart08';
import LineChart09 from '../charts/LineChart09';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';
import PolarChart from '../charts/PolarChart';
import RealtimeChart from '../charts/RealtimeChart';

// Import utilities
import { adjustColorOpacity, getCssVariable } from '../utils/Utils';
import { chartAreaGradient } from '../charts/ChartjsConfig';

function ChartsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Bar Chart 01 data
  const barChart01Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Direct',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: getCssVariable('--color-sky-500'),
        hoverBackgroundColor: getCssVariable('--color-sky-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Blue bars
      {
        label: 'Indirect',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: getCssVariable('--color-violet-500'),
        hoverBackgroundColor: getCssVariable('--color-violet-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  // Bar Chart 02 data
  const barChart02Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
      // Stack
      {
        label: 'Direct',
        data: [
          5000, 4000, 4000, 3800, 5200, 5100,
        ],
        backgroundColor: getCssVariable('--color-violet-700'),
        hoverBackgroundColor: getCssVariable('--color-violet-800'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Stack
      {
        label: 'Referral',
        data: [
          2500, 2600, 4000, 4000, 4800, 3500,
        ],
        backgroundColor: getCssVariable('--color-violet-500'),
        hoverBackgroundColor: getCssVariable('--color-violet-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Stack
      {
        label: 'Organic Search',
        data: [
          2300, 2000, 3100, 2700, 1300, 2600,
        ],
        backgroundColor: getCssVariable('--color-violet-300'),
        hoverBackgroundColor: getCssVariable('--color-violet-400'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Stack
      {
        label: 'Social',
        data: [
          4800, 4200, 4800, 1800, 3300, 3500,
        ],
        backgroundColor: getCssVariable('--color-violet-100'),
        hoverBackgroundColor: getCssVariable('--color-violet-200'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  // Bar Chart 03 data
  const barChart03Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
      // Indigo bars
      {
        label: 'Inflow',
        data: [800, 2600, 4000, 1200, 3200, 1700],
        backgroundColor: getCssVariable('--color-violet-500'),
        hoverBackgroundColor: getCssVariable('--color-violet-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Grey bars
      {
        label: 'Outflow',
        data: [2800, 1700, 900, 2900, 1950, 3100],
        backgroundColor: getCssVariable('--color-violet-200'),
        hoverBackgroundColor: getCssVariable('--color-violet-300'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  // Bar Chart 04 data
  const barChart04Data = {
    labels: [
      '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
      // Indigo bars
      {
        label: 'Inflow',
        data: [
          4100, 1900, 2700, 3900,
        ],
        backgroundColor: getCssVariable('--color-violet-500'),
        hoverBackgroundColor: getCssVariable('--color-violet-600'),
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Gray bars
      {
        label: 'Outflow',
        data: [
          2000, 1000, 1100, 2600,
        ],
        backgroundColor: getCssVariable('--color-violet-200'),
        hoverBackgroundColor: getCssVariable('--color-violet-300'),
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  // Bar Chart 05 data
  const barChart05Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023'
    ],
    datasets: [
      // Indigo bars
      {
        label: 'Inflow',
        data: [800, 2600, 4000, 1200, 3200, 1700],
        backgroundColor: getCssVariable('--color-violet-500'),
        hoverBackgroundColor: getCssVariable('--color-violet-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  // Bar Chart 06 data
  const barChart06Data = {
    labels: [
      '02-01-2023', '03-01-2023', '04-01-2023', '05-01-2023',
    ],
    datasets: [
      // Indigo bars
      {
        label: 'Stack 1',
        data: [
          6200, 9200, 6600, 8800,
        ],
        backgroundColor: getCssVariable('--color-violet-500'),
        hoverBackgroundColor: getCssVariable('--color-violet-600'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Blue bars
      {
        label: 'Stack 2',
        data: [
          -4000, -2600, -5350, -4000,
        ],
        backgroundColor: getCssVariable('--color-violet-200'),
        hoverBackgroundColor: getCssVariable('--color-violet-300'),
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  // Line Chart 01 data
  const lineChart01Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
      '06-01-2024', '07-01-2024', '08-01-2024',
      '09-01-2024', '10-01-2024', '11-01-2024',
      '12-01-2024', '01-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0) },
            { stop: 1, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0.2) }
          ]);
        },            
        borderColor: getCssVariable('--color-violet-500'),
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 02 data
  const lineChart02Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
      '06-01-2024', '07-01-2024', '08-01-2024',
      '09-01-2024', '10-01-2024', '11-01-2024',
      '12-01-2024', '01-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Current',
        data: [73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122, 110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323],
        borderColor: getCssVariable('--color-violet-500'),
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
      // Blue line
      {
        label: 'Previous',
        data: [184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124, 42, 124, 88, 88, 215, 156, 88, 124, 64],
        borderColor: getCssVariable('--color-sky-500'),
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-sky-500'),
        pointHoverBackgroundColor: getCssVariable('--color-sky-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 03 data
  const lineChart03Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
      '06-01-2024', '07-01-2024', '08-01-2024',
      '09-01-2024', '10-01-2024', '11-01-2024',
      '12-01-2024', '01-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          540, 466, 540, 466, 385, 432, 334,
          334, 289, 289, 200, 289, 222, 289,
          289, 403, 554, 304, 289, 270, 134,
          270, 829, 644, 688, 664,
        ],
        borderColor: getCssVariable('--color-violet-500'),
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0) },
            { stop: 1, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0.2) }
          ]);
        },       
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,          
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 04 data
  const lineChart04Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
      '06-01-2024', '07-01-2024', '08-01-2024',
      '09-01-2024', '10-01-2024', '11-01-2024',
      '12-01-2024', '01-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 323, 322, 270, 232],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0) },
            { stop: 1, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0.2) }
          ]);
        },       
        borderColor: getCssVariable('--color-violet-500'),
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,          
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 05 data
  const lineChart05Data = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
      '06-01-2024', '07-01-2024', '08-01-2024',
      '09-01-2024', '10-01-2024', '11-01-2024',
      '12-01-2024', '01-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Mosaic Portfolio',
        data: [
          1500, 2000, 1800, 1900, 1900, 2400, 2900, 2600, 3900, 2700,
          3500, 3200, 2900, 3500, 3600, 3400, 3900, 3600, 4100, 4100,
        ],
        borderColor: getCssVariable('--color-violet-500'),
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0) },
            { stop: 1, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0.2) }
          ]);
        },       
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,          
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 06 data
  const lineChart06Data = {
    labels: [
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
      '06-01-2024', '07-01-2024', '08-01-2024',
      '09-01-2024', '10-01-2024', '11-01-2024',
      '12-01-2024', '01-01-2025', '02-01-2025',
      '03-01-2025', '04-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          1500, 2000, 1800, 1900, 1900, 2400, 2900, 2600, 3900, 2700,
          3500, 3200, 2900, 3500, 3600, 3400, 3900, 3600, 4100, 4100,
        ],
        borderColor: getCssVariable('--color-violet-500'),
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,          
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 07 data
  const lineChart07Data = {
    labels: ['2010', 'Age 65'],
    datasets: [
      // Dark green line
      {
        label: 'Growth 1',
        data: [0, 3500000],
        borderColor: getCssVariable('--color-green-500'),
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: adjustColorOpacity(getCssVariable('--color-green-500'), 0) },
            { stop: 1, color: adjustColorOpacity(getCssVariable('--color-green-500'), 0.2) }
          ]);
        },      
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-green-500'),
        pointHoverBackgroundColor: getCssVariable('--color-green-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 08 data
  const lineChart08Data = {
    labels: [
      '12-01-2022',
      '01-01-2023',
      '02-01-2023',
      '03-01-2023',
      '04-01-2023',
      '05-01-2023',
      '06-01-2023',
      '07-01-2023',
      '08-01-2023',
      '09-01-2023',
      '10-01-2023',
      '11-01-2023',
      '12-01-2023',
      '01-01-2024',
      '02-01-2024',
      '03-01-2024',
      '04-01-2024',
      '05-01-2024',
      '06-01-2024',
      '07-01-2024',
      '08-01-2024',
      '09-01-2024',
      '10-01-2024',
      '11-01-2024',
      '12-01-2024',
      '01-01-2025',
    ],
    datasets: [
      // Line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 323, 322, 270, 232],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: adjustColorOpacity(getCssVariable('--color-red-500'), 0) },
            { stop: 1, color: adjustColorOpacity(getCssVariable('--color-red-500'), 0.2) }
          ]);
        },     
        borderColor: getCssVariable('--color-red-500'),
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-red-500'),
        pointHoverBackgroundColor: getCssVariable('--color-red-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Line Chart 09 data
  const lineChart09Data = {
    labels: [
      '12-01-2022',
      '01-01-2023',
      '02-01-2023',
      '03-01-2023',
      '04-01-2023',
      '05-01-2023',
      '06-01-2023',
      '07-01-2023',
      '08-01-2023',
      '09-01-2023',
      '10-01-2023',
      '11-01-2023',
      '12-01-2023',
      '01-01-2024',
      '02-01-2024',
      '03-01-2024',
      '04-01-2024',
      '05-01-2024',
      '06-01-2024',
      '07-01-2024',
      '08-01-2024',
      '09-01-2024',
      '10-01-2024',
      '11-01-2024',
      '12-01-2024',
      '01-01-2025',
    ],
    datasets: [
      // Line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 323, 322, 270, 232],
        borderColor: getCssVariable('--color-violet-500'),
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  // Doughnut Chart data
  const doughnutChartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [
          35, 30, 35,
        ],
        backgroundColor: [
          getCssVariable('--color-violet-500'),
          getCssVariable('--color-sky-500'),
          getCssVariable('--color-violet-800'),
        ],
        hoverBackgroundColor: [
          getCssVariable('--color-violet-600'),
          getCssVariable('--color-sky-600'),
          getCssVariable('--color-violet-900'),
        ],
        borderWidth: 0,
      },
    ],
  };

  // Pie Chart data
  const pieChartData = {
    labels: ['Cash', 'Commodities', 'Bonds', 'Stock'],
    datasets: [
      {
        label: 'Sessions By Device',
        data: [12, 13, 10, 65],
        backgroundColor: [
          getCssVariable('--color-green-400'),
          getCssVariable('--color-yellow-400'),
          getCssVariable('--color-sky-500'),
          getCssVariable('--color-violet-500'),
        ],
        hoverBackgroundColor: [
          getCssVariable('--color-green-500'),
          getCssVariable('--color-yellow-500'),
          getCssVariable('--color-sky-600'),
          getCssVariable('--color-violet-600'),
        ],
        borderWidth: 0,
      },
    ],
  };

  // Polar Chart data
  const polarChartData = {
    labels: ['Males', 'Females', 'Unknown'],
    datasets: [
      {
        label: 'Sessions By Gender',
        data: [
          500, 326, 242,
        ],
        backgroundColor: [
          adjustColorOpacity(getCssVariable('--color-violet-500'), 0.8),
          adjustColorOpacity(getCssVariable('--color-sky-500'), 0.8),
          adjustColorOpacity(getCssVariable('--color-green-500'), 0.8),
        ],
        hoverBackgroundColor: [
          adjustColorOpacity(getCssVariable('--color-violet-600'), 0.8),
          adjustColorOpacity(getCssVariable('--color-sky-600'), 0.8),
          adjustColorOpacity(getCssVariable('--color-green-600'), 0.8),
        ],
        borderWidth: 0,
      },
    ],
  };

  // Realtime Chart data
  const realtimeChartData = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
      '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024',
      '06-01-2024', '07-01-2024', '08-01-2024',
      '09-01-2024', '10-01-2024', '11-01-2024',
      '12-01-2024', '01-01-2025',
    ],
    datasets: [
      // Indigo line
      {
        data: [
          57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87,
          53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25,
          65.91, 64.44, 65.97, 62.27, 60.96, 59.34
        ],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0) },
            { stop: 1, color: adjustColorOpacity(getCssVariable('--color-violet-500'), 0.2) }
          ]);
        },       
        borderColor: getCssVariable('--color-violet-500'),
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getCssVariable('--color-violet-500'),
        pointHoverBackgroundColor: getCssVariable('--color-violet-500'),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,          
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Charts</h1>
              </div>
            </div>

            {/* Charts */}
            <div className="space-y-8">
              {/* Bar Charts */}
              <div>
                <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-6">Bar Charts</h2>
                <div className="grid grid-cols-12 gap-6">
                  {/* Bar Chart 01 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">BarChart01 - Direct vs Indirect</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <BarChart01 data={barChart01Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Bar Chart 02 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">BarChart02 - Stacked</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <BarChart02 data={barChart02Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Bar Chart 03 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">BarChart03 - Cash Flow</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <BarChart03 data={barChart03Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Bar Chart 04 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">BarChart04 - Horizontal</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <BarChart04 data={barChart04Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Bar Chart 05 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">BarChart05 - Single Bar</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <BarChart05 data={barChart05Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Bar Chart 06 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">BarChart06 - Negative Values</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <BarChart06 data={barChart06Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line Charts */}
              <div>
                <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-6">Line Charts</h2>
                <div className="grid grid-cols-12 gap-6">
                  {/* Line Chart 01 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart01 - Basic with Fill</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart01 data={lineChart01Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 02 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart02 - Multiple Lines</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart02 data={lineChart02Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 03 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart03 - Gradient Fill</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart03 data={lineChart03Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 04 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart04 - Small</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart04 data={lineChart04Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 05 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart05 - Percentage</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart05 data={lineChart05Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 06 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart06 - No Fill</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart06 data={lineChart06Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 07 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart07 - Growth</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart07 data={lineChart07Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 08 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart08 - Compact</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart08 data={lineChart08Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>

                  {/* Line Chart 09 */}
                  <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">LineChart09 - Minimal</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <LineChart09 data={lineChart09Data} width={595} height={248} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular Charts */}
              <div>
                <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-6">Circular Charts</h2>
                <div className="grid grid-cols-12 gap-6">
                  {/* Doughnut Chart */}
                  <div className="col-span-full xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">DoughnutChart</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-72">
                        <DoughnutChart data={doughnutChartData} width={389} height={260} />
                      </div>
                    </div>
                  </div>

                  {/* Pie Chart */}
                  <div className="col-span-full xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">PieChart</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-72">
                        <PieChart data={pieChartData} width={389} height={260} />
                      </div>
                    </div>
                  </div>

                  {/* Polar Chart */}
                  <div className="col-span-full xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">PolarChart</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-72">
                        <PolarChart data={polarChartData} width={389} height={260} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Realtime Chart */}
              <div>
                <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-6">Realtime Chart</h2>
                <div className="grid grid-cols-12 gap-6">
                  {/* Realtime Chart */}
                  <div className="col-span-full bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                      <h2 className="font-semibold text-gray-800 dark:text-gray-100">RealtimeChart</h2>
                    </header>
                    <div className="p-3">
                      <div className="h-64">
                        <RealtimeChart data={realtimeChartData} width={595} height={248} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ChartsPage;