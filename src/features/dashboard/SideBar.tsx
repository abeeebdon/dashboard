// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sidebarNavs } from '../data/data'

const SideBar = () => {
  //   const [activeRoute, setActiveRoute] = useState<number>(0)
  //   const handleClick = (sidebar: string) => {
  //     console.log(sidebar)
  //   }
  return (
    <aside className="fixed bg-white top-0 bottom-0 overflow-auto left-0 w-[20vw] px-4 py-6">
      <div className="flex items-center gap-4 py-2">
        <img src="/icons/dummy_logo.svg" alt="logo" />
        <p>Comp</p>
      </div>
      <article className="flex flex-col justify-between gap-4 mt-5 overflow-auto">
        {sidebarNavs.map((sidebar, index) => {
          const src = sidebar.toLowerCase()
          return (
            <NavLink
              key={index}
              to={src === 'dashboard' ? '/' : src}
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-3 rounded-lg ${
                  isActive ? 'bg-primary text-white' : 'text-grey-700'
                }`
              }
            >
              <img src={`/icons/${src}.svg`} alt={sidebar} />
              <p className="text-[18px] font-semibold ">{sidebar}</p>
            </NavLink>
          )
        })}
      </article>
      <article className="bg-primary p-4 rounded-[20px] mt-[100px] max-w-[238px] pt-6">
        <div className="bg-white p-4 rounded-[16px] w-fit mx-auto">
          <img src="/icons/dummy_icon.svg" alt="logo" />
        </div>
        <h2 className="my-2 text-center text-[20px] leading-8 font-semibold text-white">
          Dabang Pro
        </h2>
        <p className="text-[12px] leading-4 font-medium text-center text-white">
          Get access to all features on tetumbas
        </p>
        <div className="flex justify-center h-10 mt-[30px]">
          <button className="bg-white w-full rounded-lg max-w-[136px] text-primary text-[16px] leading-6 font-600">
            Get pro
          </button>
        </div>
      </article>
    </aside>
  )
}

export default SideBar
