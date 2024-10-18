import SalesComponent from './SalesComponent'

const Col = () => {
  return (
    <section className="w-3/5  p-4 pb-6 rounded-[20px] h-full bg-white">
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
      <article className="mt-10 pb-4 flex items-center gap-6 ">
        <SalesComponent
          name="Total Sales"
          details="+8% from yesterday"
          number="$1k"
          src="sales"
          bgColor="#FFE2E5"
        />
        <SalesComponent
          name="Total Order "
          details="+5% from yesterday"
          number={300}
          src="order2"
          bgColor="#FFF4DE"
        />
        <SalesComponent
          name="Product Sold"
          details="+1,2% from yesterday"
          number={8}
          src="sold"
          bgColor="#DCFCE7"
        />
        <SalesComponent
          name="New Customers"
          details="0,5% from yesterday"
          number={8}
          src="customer"
          bgColor="#F3E8FF"
        />
      </article>
    </section>
  )
}

export default Col
