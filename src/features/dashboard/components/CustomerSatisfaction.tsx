import { CustomerChart } from '@/components/CustomerChart'

const CustomerSatisfaction = () => {
  return (
    <article className="bg-white col-span-2 p-4 rounded-[20px]">
      <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
        Customer Satisfaction
      </h2>
      <div className="mt-4">
        <div className="mb-4">
          <CustomerChart />
        </div>
        <hr />
        <article className="mt-6 flex items-center gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#0095FF]"></div>
            <p>Last month </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#05C283]"></div>
            <p>This month</p>
          </div>
        </article>
      </div>
    </article>
  )
}

export default CustomerSatisfaction
