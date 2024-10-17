interface Props {
  src: string
  name: string
  details: string
  number: number
  bgColor: string
}
const SalesComponent = ({ src, name, details, number, bgColor }: Props) => {
  return (
    <section
      className={`rounded-lg w-full max-w-[180px] h-[184px] space-y-4 border p-4 bg-${bgColor}`}
    >
      <img src={`/icons/${src}.svg`} alt={name} className="w-10 h-10" />
      <p className="text-grey-900 leading-8 text-[24px] font-semibold">
        {number}
      </p>
      <p className=" text-[#425166] leading-6 font-medium text-[16px]">
        {name}
      </p>
      <span className="text-grey-800 text-[12px] leading-4 font-medium">
        {details}
      </span>
    </section>
  )
}

export default SalesComponent
