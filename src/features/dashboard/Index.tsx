import Header from './Header'
import SideBar from './SideBar'

const MainDashboard = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main className="rounded-sm fixed bottom-0 h-[81vh] right-0 w-[80vw] px-4">
        <p>Main component</p>
      </main>
    </>
  )
}

export default MainDashboard
