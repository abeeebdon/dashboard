import Col from './components/Col'

const MainComponent = () => {
  return (
    <>
      <section className="flex items-center justify-between gap-4">
        <Col />
        <article className="w-1/2 bg-white">
          <h2>Visitor Insigts</h2>
        </article>
      </section>
    </>
  )
}

export default MainComponent
