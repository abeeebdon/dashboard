import SalesComponent from './SalesComponent'

const Col = () => {
  return (
    <section className="w-3/5  p-4 rounded-[20px] h-full bg-white">
      <article className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Today's Sales
          </h2>
          <p className="text-[16px] leading-[30px] text-grey-700 ">
            Sales summary
          </p>
        </div>
        <div className="border border-[#C3D3E2] px-4  rounded-lg flex items-center gap-2">
          <img src="/icons/export.svg" alt="img" />
          <p className="text-[14px] leading-5 font-medium text-[#0F3659]">
            Export
          </p>
        </div>
      </article>
      <article className="mt-5 flex items-center gap-4 ">
        <SalesComponent
          name="Total Sales"
          details="+8% from yesterday"
          number="$1k"
          src="customer"
          bgColor="pink-100"
        />
        <SalesComponent
          name="Total Order "
          details="+5% from yesterday"
          number={300}
          src="customer"
          bgColor="pink-50"
        />
        <SalesComponent
          name="Product Sold"
          details="+1,2% from yesterday"
          number={8}
          src="customer"
          bgColor="grey-100"
        />
        <SalesComponent
          name="New Customers"
          details="0,5% from yesterday"
          number={8}
          src="customer"
          bgColor="purples-100"
        />
      </article>
    </section>
  )
}

export default Col
