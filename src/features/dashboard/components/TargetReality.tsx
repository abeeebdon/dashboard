import { Target } from '@/components/Target'
import TargetComponent from '@/components/TargetComponent'

const TargetReality = () => {
  return (
    <article className="bg-white col-span-2 p-4 rounded-[20px]">
      <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
        Target vs Reality
      </h2>
      <div className="mt-4">
        <Target />
      </div>

      <div className="flex flex-col pl-4 gap-4">
        <TargetComponent
          value="8.823"
          heading="Reality Sales"
          paragraph="Global"
          src="bag"
          color="#27AE60"
        />
        <TargetComponent
          value="12.122"
          heading="Target Sales"
          paragraph="Commercial"
          src="target"
          color="#FFA412"
        />
      </div>
    </article>
  )
}

export default TargetReality
