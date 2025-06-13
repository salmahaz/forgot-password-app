// "use client";

// import { FC } from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Tooltip,
// } from 'chart.js';

// ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

// const LeakageDetectionCosts: FC = () => {
//   const data = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
//     datasets: [
//       {
//         label: 'Leakage Cost',
//         data: [0, 2, 7, 15, 26, 40],
//         fill: false,
//         borderColor: '#ef4444',
//         backgroundColor: '#ef4444',
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { callback: (val: any) => `$${val}` },
//       },
//     },
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-md">
//       <div className="flex justify-between items-start mb-2">
//         <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
//           <span className="text-red-500">⚠️</span>
//           Leakage Detection Costs
//         </div>
//         <div className="text-sm text-red-500 font-medium">
//           Potential loss:<br />$39.20/6wk
//         </div>
//       </div>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default LeakageDetectionCosts;
