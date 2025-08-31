
export const CardItem = () => {
  return (
    <div className='flex gap-3 justify-center p-2 rounded-3xl bg-white shadow-md'>
      <div className="border-none p-3 text-sm rounded-full border h-8 w-8 flex items-center justify-center bg-blue-500 text-white">
        LV
      </div>
      <div>
        <div className="flex items-center justify-between mb-1">
          <h1 className='text-sm'>Usuario</h1>
          <span className="text-xs text-zinc-400 font-normal">Agosto 31</span>
        </div>
        <p className='text-sm font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ipsam?</p>
      </div>
    </div>
  )
}
