import { cn } from '@/lib/utils'

interface Props {
  className?: string
  src: string
  heading: string
  value: string
  paragraph: string
  color?: string
}
const TargetComponent = ({
  className,
  src,
  heading,
  value,
  paragraph,
  color,
}: Props) => {
  return (
    <article
      className={cn(
        'w-full max-w-[220px] flex justify-between items-center gap-4',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <img src={`/icons/${src}.svg`} alt={src} className="w-8 h-8" />
        <div className="flex flex-col gap-1">
          <h2 className="text-[12px] leading-4 text-grey-900 font-semibold">
            {heading}
          </h2>
          <p className="text-[10px] leading-4 text-grey-700">{paragraph}</p>
        </div>
      </div>
      <p className="text-[14px] leading-5 font-medium" style={{ color: color }}>
        {value}
      </p>
    </article>
  )
}

export default TargetComponent
