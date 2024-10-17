const Header = () => {
  return (
    <header className="px-4 fixed bg-white right-0 top-0 h-[15vh] w-[80vw]">
      <section className="flex items-center py-5 justify-between">
        <h2 className="text-grey-900 leading-[50px] text-[36px] font-semibold">
          Dashboard
        </h2>
        <div className="w-full max-w-[400px] flex items-center gap-4 rounded-xl px-6 py-4 bg-grey-300">
          <img src="/icons/magnifier.svg" alt="mag" />
          <input
            placeholder="Search here ..."
            type="text"
            className="border-none outline-none bg-transparent w-full"
          />
        </div>
        <article className="flex items-center gap-5">
          <img src="/images/user.png" alt="img" />
          <div>
            <h2 className="text-[16px] leading-6 font-medium text-grey-900">
              Musfiq
            </h2>
            <p className="text-grey-700 text-[14px] leading-5">Admin</p>
          </div>
        </article>
      </section>
    </header>
  )
}

export default Header
