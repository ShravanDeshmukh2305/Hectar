import React from 'react'
import { Card, Title, Text } from "@tremor/react"

const countries = [
  { name: "Côte d'Ivoire", flag: "🇨🇮" },
  { name: "India", flag: "🇮🇳" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Tanzania", flag: "🇹🇿" }
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const calendarData = {
  "Côte d'Ivoire": { harvest: [0, 1, 2, 3], trade: [4, 5, 6, 7] },
  "India": { harvest: [1, 2, 3], trade: [3, 4, 5, 6, 7, 8] },
  "Vietnam": { harvest: [2, 3], trade: [3, 4, 5, 6, 7, 8, 9] },
  "Brazil": { harvest: [8, 9, 10, 11], trade: [9, 10] },
  "Tanzania": { harvest: [7, 8, 9], trade: [9, 10, 11] }
}

export default function HarvestTradeCalendar() {
  return (
    <Card className="w-[740px] h-[384px] p-5 bg-white rounded-3xl border border-gray-200">
      <Title className="text-gray-800 mb-4">Harvest & Trade Calendar</Title>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-normal text-gray-500 pb-2">Country</th>
              {months.map(month => (
                <th key={month} className="text-center font-normal text-gray-500 pb-2">{month}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {countries.map(({ name, flag }) => (
              <tr key={name} className="border-t border-gray-100">
                <td className="py-2">
                  <Text>{flag} {name}</Text>
                </td>
                {months.map((_, index) => (
                  <td key={index} className="py-2">
                    <div className="flex justify-center items-center space-x-1">
                      <div className={`w-4 h-2 rounded-sm ${calendarData[name].harvest.includes(index) ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                      <div className={`w-4 h-2 rounded-sm ${calendarData[name].trade.includes(index) ? 'bg-blue-400' : 'bg-gray-200'}`}></div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center space-x-4 mt-4">
        <div className="flex items-center">
          <div className="w-4 h-2 bg-green-400 rounded-sm mr-2"></div>
          <Text className="text-sm text-gray-600">Harvest</Text>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-2 bg-blue-400 rounded-sm mr-2"></div>
          <Text className="text-sm text-gray-600">Trade</Text>
        </div>
      </div>
    </Card>
  )
}