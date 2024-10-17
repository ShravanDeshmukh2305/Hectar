import React from 'react';
import { Card, Title, AreaChart, Flex } from "@tremor/react";
import { ClipboardIcon } from "lucide-react";

const data = [
  { date: "Jan 23", SolarPanels: 2900, Inverters: 2300 },
  { date: "Mar 23", SolarPanels: 3300, Inverters: 2200 },
  { date: "May 23", SolarPanels: 3500, Inverters: 1800 },
  { date: "Jul 23", SolarPanels: 3400, Inverters: 2000 },
  { date: "Sep 23", SolarPanels: 2800, Inverters: 2400 },
  { date: "Nov 23", SolarPanels: 3200, Inverters: 3800 },
];

const AreaChartComponent = () => (
  <Card className="w-[740px] h-[384px] max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200">
    <Flex alignItems="center" justifyContent="between" className="mb-4">
      <Title>Area Chart</Title>
      <ClipboardIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
    </Flex>
    <AreaChart
      className="h-72 mt-4"
      data={data}
      index="date"
      categories={["SolarPanels", "Inverters"]}
      colors={["blue", "green"]}
      valueFormatter={(number) => `$${number.toLocaleString()}`}
      yAxisWidth={60}
      showLegend={true}
      showGridLines={false}
      showYAxis={true}
      showXAxis={true}
      minValue={0}
      maxValue={4000}
    />
  </Card>
);

export default AreaChartComponent;