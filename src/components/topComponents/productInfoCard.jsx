import React from 'react';

export default function ProductInfo() {
  return (
    <div className="w-[847px] h-[377px] bg-white p-6 font-sans rounded-2xl shadow-md border border-gray-200 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
          <div className='text-left'>
            <h2 className="text-xl font-semibold">Raw Cashew Nuts</h2>
            <p className="text-sm text-gray-500">HS: 080131</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">$ 1550.00</p>
          <div className="flex items-center" >
          <div className="w-5 h-5 bg-gray-200 rounded-full mr-4 "></div>
          <p className="text-sm text-red-500">2.1% vs yesterday</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-left">
          <p className="text-sm text-gray-500 mb-1">YTD Production</p>
          <p className="text-xl font-semibold mb-1">3,200,000 MT</p>
          <p className="text-xs text-gray-500 mb-2">Target: 4,000,000 MT</p>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="text-left">
          <p className="text-sm text-gray-500 mb-1">YTD Exports</p>
          <p className="text-xl font-semibold mb-1">2,100,000 MT</p>
          <p className="text-xs text-green-500 mb-2">3.5% vs last year</p>
          <p className="text-xs text-gray-500">Last Year: 2,029,000 MT</p>
        </div>
        <div className="text-left">
          <p className="text-sm text-gray-500 mb-1">YTD Performance</p>
          <p className="text-xl font-semibold text-red-500">Lagging by 1.2%</p>
          <p className="text-xs text-gray-500">vs 5-year average</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-500 mb-2 text-left">Next Major Harvest</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-gray-200 rounded-full mr-3"></div>
            <p className="font-semibold">Vietnam (Feb-May)</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold">420,000 MT</p>
            <p className="text-sm text-red-500">-5.2% vs last year</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg text-sm font-semibold">
          Get AI Trade Suggestion
        </button>
      </div>
    </div>
  );
}






// import React from 'react';

// export default function ProductInfo() {
//   return (
//     <div className="max-w-screen-lg mx-auto w-full bg-white p-6 font-sans rounded-2xl shadow-md border border-gray-200 flex flex-col">
//       <div className="flex flex-col md:flex-row justify-between items-start mb-6">
//         <div className="flex items-center mb-4 md:mb-0">
//           <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
//           <div className="text-left">
//             <h2 className="text-xl font-semibold">Raw Cashew Nuts</h2>
//             <p className="text-sm text-gray-500">HS: 080131</p>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-3xl font-bold">$ 1550.00</p>
//           <div className="flex items-center">
//             <div className="w-5 h-5 bg-gray-200 rounded-full mr-4"></div>
//             <p className="text-sm text-red-500">2.1% vs yesterday</p>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//         <div className="text-left">
//           <p className="text-sm text-gray-500 mb-1">YTD Production</p>
//           <p className="text-xl font-semibold mb-1">3,200,000 MT</p>
//           <p className="text-xs text-gray-500 mb-2">Target: 4,000,000 MT</p>
//           <div className="h-2 bg-gray-200 rounded-full">
//             <div className="h-2 bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
//           </div>
//         </div>
//         <div className="text-left">
//           <p className="text-sm text-gray-500 mb-1">YTD Exports</p>
//           <p className="text-xl font-semibold mb-1">2,100,000 MT</p>
//           <p className="text-xs text-green-500 mb-2">3.5% vs last year</p>
//           <p className="text-xs text-gray-500">Last Year: 2,029,000 MT</p>
//         </div>
//         <div className="text-left">
//           <p className="text-sm text-gray-500 mb-1">YTD Performance</p>
//           <p className="text-xl font-semibold text-red-500">Lagging by 1.2%</p>
//           <p className="text-xs text-gray-500">vs 5-year average</p>
//         </div>
//       </div>

//       <div className="mb-6">
//         <p className="text-sm text-gray-500 mb-2 text-left">Next Major Harvest</p>
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="flex items-center mb-2 md:mb-0">
//             <div className="w-7 h-7 bg-gray-200 rounded-full mr-3"></div>
//             <p className="font-semibold">Vietnam (Feb-May)</p>
//           </div>
//           <div className="text-right">
//             <p className="text-xl font-semibold">420,000 MT</p>
//             <p className="text-sm text-red-500">-5.2% vs last year</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-auto">
//         <button className="w-full bg-blue-50 text-blue-600 py-3 rounded-lg text-sm font-semibold">
//           Get AI Trade Suggestion
//         </button>
//       </div>
//     </div>
//   );
// }
