
export const Card = () => {
  return (
    <div className='flex flex-col bg-white rounded-2xl'>
      <img 
        className="rounded-t-xl"
        src="https://images.pexels.com/photos/20726950/pexels-photo-20726950.jpeg" 
        alt="" 
      />
      <div className="p-5 space-y-1">
        <h1 className="text-xl">Titulo</h1>
        <p className='text-sm font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, labore?</p>
      </div>
    </div>
  )
}
