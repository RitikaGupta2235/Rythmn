import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const {track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext);

  return (
    <div class="h-[10%] bg-black flex items-center font-normal text-[#6bf4f4] px-4">
      <div class="hidden lg:flex items-center gap-4">
        <img src={track.image} class="w-12" alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.previous_icon} alt="" />
          {playStatus
          ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
          :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          }
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-[#6bf4f4] rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
          <img className='w-4 cursor-pointer' src={assets.plays_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.mike_icon} alt="" />
          <img className='w-3 cursor-pointer' src={assets.queue_icon} alt="" />
          <img className='w-5 cursor-pointer' src={assets.speaker_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.volume_icon} alt="" />
          <div className='w-20 bg-slate-50 h-1 rounded cursor-pointer'>

          </div>
          <img className='w-4 cursor-pointer' src={assets.miniplayer_icon} alt="" />
          <img className='w-3 cursor-pointer' src={assets.zoom_icon} alt="" />
        </div>
    </div>
  )
}

export default Player