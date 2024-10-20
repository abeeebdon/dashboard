import Header from './Header'
import MainComponent from './MainComponent'
import SideBar from './SideBar'

const MainDashboard = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main className="rounded-sm fixed bottom-0 h-[81vh] right-0 w-[80vw] px-4 overflow-auto pb-8">
        <MainComponent />
      </main>
    </>
  )
}

export default MainDashboard
