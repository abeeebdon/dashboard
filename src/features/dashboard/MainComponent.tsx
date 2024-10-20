import { Component } from '@/components/SimpleChart'
import Col from './components/Col'
import TopProducts from './components/TopProducts'
import CountryMapping from './components/CountryMapping'
import VolumeService from './components/VolumeService'
import TargetReality from './components/TargetReality'
import CustomerSatisfaction from './components/CustomerSatisfaction'
import { BarChartMultiple } from '@/components/BarchartMultiple'

const MainComponent = () => {
  return (
    <>
      <section className="flex  h-fit justify-between gap-4 ">
        <Col />
        <article className="p-4 rounded-[20px] w-2/5 bg-white">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Visitor Insights
          </h2>
          <div className="mt-3">
            <Component />
          </div>
        </article>
      </section>

      {/* Total Revenue and others */}
      <section className="mt-6 grid grid-cols-7 gap-4">
        <article className="bg-white col-span-3 p-4 rounded-[20px]">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Total Revenue
          </h2>
          <div className="mt-4">
            <BarChartMultiple />
            <hr />
            <article className="mt-4 flex items-center gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#0095FF]"></div>
                <p>Online sales</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-[#0095FF]"></div>
                <p>Offline sales</p>
              </div>
            </article>
          </div>
        </article>
        <CustomerSatisfaction />
        <TargetReality />
      </section>

      {/* Top PRoducts and others  */}
      <section className="mt-6 grid grid-cols-7 gap-4">
        <TopProducts />
        <CountryMapping />
        <VolumeService />
      </section>
    </>
  )
}

export default MainComponent
