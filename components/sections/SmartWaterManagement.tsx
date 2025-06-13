// import { FC } from "react";
// import { FaLeaf } from "react-icons/fa";

// const SmartWaterManagement: FC = () => {
//   return (
//     <div
//       className="bg-white rounded-xl shadow-md p-6 max-w-md w-full hover:shadow-lg transition-shadow duration-300"
//       aria-label="Smart Water Management Panel"
//     >
//       <h2 className="text-xl font-bold text-gray-800 mb-2">
//         Smart Water Management
//       </h2>
//       <p className="text-sm text-gray-500 mb-6">
//         AI-powered recommendations and optimization tools
//       </p>

//       <div className="bg-white border border-gray-300 rounded-lg flex flex-col gap-3 p-3">
//         <div className="flex gap-1.5 text-green-600 font-semibold">
//           <FaLeaf aria-hidden="true" />
//           <span>Conservation Score</span>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="relative w-36 h-20 mx-auto">
//             {" "}
//             {/* wider width, smaller height */}
//             <svg
//               className="w-full h-full"
//               viewBox="0 0 112 56" /* width doubled compared to height */
//               aria-hidden="true"
//             >
//               <circle
//                 cx="56" /* center x in the middle */
//                 cy="28" /* center y in the middle */
//                 r="23" /* smaller radius */
//                 stroke="#d1d5db"
//                 strokeWidth="6"
//                 fill="none"
//               />
//               <circle
//                 cx="56"
//                 cy="28"
//                 r="23"
//                 stroke="#10b981"
//                 strokeWidth="6"
//                 fill="none"
//                 strokeDasharray="144" /* approx circumference: 2πr */
//                 strokeDashoffset="24" /* adjust offset to match progress */
//                 strokeLinecap="round"
//               />
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//               <div className="text-lg font-bold text-green-600">87</div>{" "}
//               {/* smaller text */}
//               <div className="text-xs text-gray-500">Grade A</div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-2 text-sm w-full max-w-xs mt-2">
//             <div className="flex justify-between">
//               <span className="text-gray-500">Efficiency Rating</span>
//               <span className="text-green-600 font-medium">Excellent</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Monthly Improvement</span>
//               <span className="text-blue-600 font-medium">+5 points</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Rank</span>
//               <span className="text-black font-medium">Top 15%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmartWaterManagement;
