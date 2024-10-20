import { Progress } from '@/components/Progress'
import { products } from '@/features/data/data'

const TopProducts = () => {
  return (
    <article className="bg-white col-span-3 py-4 rounded-[20px]">
      <h2 className="text-[20px] px-4 leading-8 font-semibold text-grey-shade">
        Top Products
      </h2>
      <section className="w-full px-4">
        <div className="w-full grid grid-cols-6 p-2 text-[13px] leading-4 text-[#96A5B8] border-b">
          <p>#</p>
          <p className="col-span-2">Name</p>
          <p className="col-span-2">Popularity</p>
          <p className="col-span-1">Sales</p>
        </div>
        {products.map((product, index) => {
          const { name, value, color } = product
          return (
            <div className="w-full grid grid-cols-6 items-center  p-3 gap-2 text-[14px] leading-5 text-grey-80 border-b">
              <p>0{index + 1}</p>
              <p className="col-span-2">{name}</p>
              <div className="col-span-2 flex items-center">
                <Progress className="h-2 bg-grey-100 " value={value} />
              </div>
              <p
                style={{
                  borderColor: color,
                  color: color,
                }}
                className="col-span-1 border-2 rounded-lg  w-fit p-2"
              >
                {value}%
              </p>
            </div>
          )
        })}
      </section>
    </article>
  )
}

export default TopProducts
