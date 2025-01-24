import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItems = ({name,image,desc,id}) => {

  const {playwithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playwithId(id)} className='p-2 px-3 rounded min-w-[25%] cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded w-full h-[50%]' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItems