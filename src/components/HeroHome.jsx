
export const HeroHome = ({ title, subtitle, buttonText }) => {
  return (
    <div
      className={`bg-black w-full h-full flex flex-col p-10 justify-center text-white space-y-10 relative`}
    >
      <div className="absolute inset-0 bg-[#00000075] h-full w-full"></div>      
      <div className="z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-blue-400 font-semibold uppercase">Explora</p>
          <h1 className="text-7xl font-semibold">{title}</h1>
          <p className="text-2xl">{subtitle}</p>
        </div>
        <a className="bg-white w-max px-10 py-4 rounded-full text-black font-semibold" href="">{buttonText}</a>
      </div>
    </div>
  )
}
