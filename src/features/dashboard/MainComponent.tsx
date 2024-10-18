import { Component } from '@/components/SimpleChart'
import Col from './components/Col'
import TopProducts from './components/TopProducts'

const MainComponent = () => {
  return (
    <>
      <section className="flex  h-fit justify-between gap-4">
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
            <Component />
          </div>
        </article>
        <article className="bg-white col-span-2 p-4 rounded-[20px]">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Customer Satisfaction
          </h2>
          <div className="mt-4">
            <Component />
          </div>
        </article>
        <article className="bg-white col-span-2 p-4 rounded-[20px]">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Customer Satisfaction
          </h2>
          <div className="mt-4">
            <Component />
          </div>
        </article>
      </section>

      {/* Top PRoducts and others  */}
      <section className="mt-6 grid grid-cols-7 gap-4">
        <TopProducts />
        <article className="bg-white col-span-2 p-4 rounded-[20px]">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Customer Satisfaction
          </h2>
          <div className="mt-4">
            <Component />
          </div>
        </article>
        <article className="bg-white col-span-2 p-4 rounded-[20px]">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Customer Satisfaction
          </h2>
          <div className="mt-4">
            <Component />
          </div>
        </article>
      </section>
    </>
  )
}

export default MainComponent
