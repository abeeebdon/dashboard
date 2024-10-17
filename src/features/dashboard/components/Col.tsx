import SalesComponent from './SalesComponent'

const Col = () => {
  return (
    <section className="w-1/2  p-4 rounded-[20px] h-full bg-white">
      <article className="flex justify-between">
        <div className="flex flex-col">
          <h2>Today's Sales</h2>
          <p>Sales summary</p>
        </div>
        <div className="border p-2 flex items-center gap-2">
          <img src="/icons/export.svg" alt="img" />
          <span>Export</span>
        </div>
      </article>
      <article className="flex items-center gap-4 ">
        <SalesComponent
          name="New Customers"
          details="0,5% from yesterday"
          number={8}
          src="customer"
          bgColor="purples-100"
        />
        <SalesComponent
          name="New Customers"
          details="0,5% from yesterday"
          number={8}
          src="customer"
          bgColor="purples-100"
        />
        <SalesComponent
          name="New Customers"
          details="0,5% from yesterday"
          number={8}
          src="customer"
          bgColor="purples-100"
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
