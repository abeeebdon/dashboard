import { CustomerChart } from '@/components/CustomerChart'

const CustomerSatisfaction = () => {
  return (
    <article className="bg-white col-span-2 p-4 rounded-[20px]">
      <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
        Customer Satisfaction
      </h2>
      <div className="mt-4">
        <CustomerChart />
      </div>
    </article>
  )
}

export default CustomerSatisfaction
