export default function TradeSightCard() {
  return (
    <div className="w-[413px] h-[349px] p-5 bg-white rounded-3xl border border-gray-200 flex flex-col ">
      <h2 className="text-[28px] font-bold text-[#4169E1] mb-4">
        Hectar tradeSight
        <sup className="text-[16px] font-normal align-top">TM</sup>
      </h2>
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-[40px] font-bold">Buy</h3>
          <p className="text-gray-500 text-sm">Recommended Action</p>
        </div>
        <div className="text-right">
          <p className="text-[#2ECC71] text-[32px] font-bold">$1627.50</p>
          <p className="text-gray-500 text-sm">1 month forecast</p>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="bg-[#E8F5E9] text-[#2ECC71] px-2 py-1 rounded-full text-sm">
          +5.58%
        </span>
      </div>
      <p className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600 mt-3 mb-4 flex-grow">
        Our AI predicts a rise in prices due to increasing global demand and
        potential supply constraints.
      </p>
      <button className="w-full bg-[#4169E1] text-white py-3 rounded-lg text-lg font-semibold">
        Execute Trade
      </button>
    </div>
  );
}





// export default function TradeSightCard() {
//   return (
//     <div className="max-w-sm md:max-w-md lg:max-w-lg w-full p-5 bg-white rounded-3xl border border-gray-200 flex flex-col">
//       <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4169E1] mb-4">
//         Hectar tradeSight
//         <sup className="text-sm md:text-base font-normal align-top">TM</sup>
//       </h2>
//       <div className="flex justify-between items-start mb-1">
//         <div>
//           <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">Buy</h3>
//           <p className="text-gray-500 text-xs md:text-sm">Recommended Action</p>
//         </div>
//         <div className="text-right">
//           <p className="text-[#2ECC71] text-2xl md:text-3xl font-bold">$1627.50</p>
//           <p className="text-gray-500 text-xs md:text-sm">1 month forecast</p>
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <span className="bg-[#E8F5E9] text-[#2ECC71] px-2 py-1 rounded-full text-xs md:text-sm">
//           +5.58%
//         </span>
//       </div>
//       <p className="bg-gray-100 p-3 rounded-lg text-xs md:text-sm text-gray-600 mt-3 mb-4 flex-grow">
//         Our AI predicts a rise in prices due to increasing global demand and potential supply constraints.
//       </p>
//       <button className="w-full bg-[#4169E1] text-white py-3 rounded-lg text-lg font-semibold">
//         Execute Trade
//       </button>
//     </div>
//   );
// }

