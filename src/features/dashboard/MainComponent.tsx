import Col from './components/Col'

const MainComponent = () => {
  return (
    <>
      <section className="flex  h-fit justify-between gap-4">
        <Col />
        <article className="p-4 rounded-[20px] w-2/5 bg-white">
          <h2 className="text-[20px] leading-8 font-semibold text-grey-shade">
            Visitor Insigts
          </h2>
        </article>
      </section>
    </>
  )
}

export default MainComponent
