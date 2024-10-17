// import React from 'react';
// import { Card, Title, BarChart, LineChart, Flex } from "@tremor/react";
// import { ClipboardIcon } from "lucide-react";

// const chartdata = [
//   { date: "Jan 23", SolarPanels: 2850, Inverters: 2300 },
//   { date: "Mar 23", SolarPanels: 2750, Inverters: 2200 },
//   { date: "May 23", SolarPanels: 3500, Inverters: 2000 },
//   { date: "Jul 23", SolarPanels: 3200, Inverters: 1750 },
//   { date: "Sep 23", SolarPanels: 2900, Inverters: 2100 },
//   { date: "Nov 23", SolarPanels: 3000, Inverters: 3900 },
// ];

// const ComboChartComponent = () => (
//   <Card className="w-[468px] h-[320px] mx-auto p-4">
//     <Flex alignItems="center" justifyContent="between" className="mb-2">
//       <Title className="text-lg">ComboChart</Title>
//       <ClipboardIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
//     </Flex>
//     <div className="relative h-[230px]">
//       <BarChart
//         className="h-full"
//         data={chartdata}
//         index="date"
//         categories={["SolarPanels"]}
//         colors={["blue"]}
//         valueFormatter={(number) => `${number.toLocaleString()}`}
//         yAxisWidth={48}
//         showLegend={false}
//         showGridLines={true}
//         startEndOnly={true}
//         showYAxis={true}
//         showXAxis={true}
//       />
//       <div className="absolute inset-0">
//         <LineChart
//           className="h-full"
//           data={chartdata}
//           index="date"
//           categories={["Inverters"]}
//           colors={["orange"]}
//           valueFormatter={(number) => `${number.toLocaleString()}`}
//           yAxisWidth={48}
//           showLegend={false}
//           showGridLines={false}
//           showYAxis={false}
//           showXAxis={false}
//         />
//       </div>
//     </div>
//     <Flex justifyContent="center" className="mt-2">
//       <div className="flex items-center space-x-2">
//         <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
//         <span className="text-xs text-gray-600">SolarPanels</span>
//       </div>
//       <div className="flex items-center space-x-2 ml-4">
//         <div className="w-3 h-3 border-2 border-orange-500 rounded-sm"></div>
//         <span className="text-xs text-gray-600">Inverters</span>
//       </div>
//     </Flex>
//   </Card>
// );

// export default ComboChartComponent;



import React from 'react';
import { Card, Title, BarChart, LineChart } from "@tremor/react";
import { ClipboardIcon } from "lucide-react";

const chartdata = [
  { date: "Jan 23", SolarPanels: 2850, Inverters: 2300 },
  { date: "Mar 23", SolarPanels: 2750, Inverters: 2100 },
  { date: "May 23", SolarPanels: 3500, Inverters: 2050 },
  { date: "Jul 23", SolarPanels: 3200, Inverters: 1800 },
  { date: "Sep 23", SolarPanels: 2900, Inverters: 2100 },
  { date: "Nov 23", SolarPanels: 3200, Inverters: 3900 },
];

const ComboChartComponent = () => (
  <Card className="w-[468px] h-[320px] mx-auto p-4">
    <div className="flex justify-between items-center mb-2">
      <Title className="text-lg font-medium">ComboChart</Title>
      <ClipboardIcon className="h-5 w-5 text-gray-400 cursor-pointer" aria-label="Copy data" />
    </div>
    <div className="relative h-[250px]">
      <BarChart
        className="h-full"
        data={chartdata}
        index="date"
        categories={["SolarPanels"]}
        colors={["blue"]}
        valueFormatter={(number) => `${number.toLocaleString()}`}
        showLegend={false}
        showGridLines={true}
        startEndOnly={false}
        showYAxis={true}
        showXAxis={true}
      >
        <LineChart
          data={chartdata}
          index="date"
          categories={["Inverters"]}
          colors={["orange"]}
          valueFormatter={(number) => `${number.toLocaleString()}`}
          showLegend={false}
          showGridLines={false}
          showYAxis={false}
          showXAxis={false}
          curveType="monotone"
          connectNulls={true}
        />
      </BarChart>
    </div>
    <div className="flex justify-center items-center mt-2 space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-blue-500"></div>
        <span className="text-sm text-gray-600">SolarPanels</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-4 h-[2px] bg-orange-500"></div>
        <span className="text-sm text-gray-600">Inverters</span>
      </div>
    </div>
  </Card>
);

export default ComboChartComponent;
