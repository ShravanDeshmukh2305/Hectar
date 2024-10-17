import './App.css'
// import { AreaChart1 } from './components/bottomComponents/Area'
import AreaChartComponent from './components/bottomComponents/areaChartt'
import ComboChartComponent from './components/bottomComponents/comboChart'
import HarvestTradeCalendar from './components/bottomComponents/harvestTradeCalender'

import ProductInfo from './components/topComponents/productInfoCard'
import TradeSightCard from './components/topComponents/tradeSightCard'

function App() {
  

  return (
    <>
    <div className='flex gap-5'>
    <ProductInfo/>
    <TradeSightCard/>
    </div>
    <HarvestTradeCalendar/>
    <AreaChartComponent/>
    <ComboChartComponent/>
    {/* <AreaChart1/> */}
    </>
  )
}

export default App
