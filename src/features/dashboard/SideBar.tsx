// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sidebarNavs } from '../data/data'

const SideBar = () => {
  //   const [activeRoute, setActiveRoute] = useState<number>(0)
  //   const handleClick = (sidebar: string) => {
  //     console.log(sidebar)
  //   }
  return (
    <aside className="fixed bg-white top-0 bottom-0 left-0 w-[20vw] px-4 py-6">
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
    </aside>
  )
}

export default SideBar
