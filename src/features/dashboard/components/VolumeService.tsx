import { Volume } from '@/components/BarChart'

const VolumeService = () => {
  return (
    <article className="bg-white col-span-2 p-4 rounded-[20px]">
      <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
        Customer Satisfaction
      </h2>
      <section>
        <div className="mb-4">
          <Volume />
        </div>
        <hr />
        <div className="flex items-center justify-center mt-4 gap-4">
          <article className="flex gap-3 items-center">
            <div className="size-3 rounded-full bg-[#0095FF]"></div>

            <div>
              <p className="text-[#96A5B8] leading-8">Volume </p>
              <span className="text-[14px] leading-5 text-[#222B45]">1135</span>
            </div>
          </article>
          <article className="flex gap-3 items-center">
            <div className="size-3 rounded-full bg-[#00E096]"></div>
            <div>
              <p className="text-[#96A5B8] leading-8">Services </p>
              <span className="text-[14px] leading-5 text-[#222B45]">635</span>
            </div>
          </article>
        </div>
      </section>
    </article>
  )
}

export default VolumeService
