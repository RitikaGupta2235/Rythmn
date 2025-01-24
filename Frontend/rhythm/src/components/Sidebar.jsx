import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();

  return (
    <div class="w-[25%] h-full p-2 flex-col gap-2 text-[#6bf4f4] hidden lg:flex ">
        <div class="bg-[#121212] h-[15%] rounded flex flex-col justify-around gap-5">
            <div onClick={()=>navigate('/')} class="flex items-center gap-3 pl-8 cursor-pointer">
                <img src={assets.home_icon} alt="" class="w-[10%]" />
                <p class="font-bold">Home</p>
            </div>
            <div class="flex items-center gap-3 pl-8 cursor-pointer">
                <img src={assets.search_icon} alt="" class="w-[10%]" />
                <p class="font-bold">Search</p>
            </div>
        </div>
        <div class="bg-[#121212] h-[85%] rounded">
            <div class="p-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <img src={assets.stack_icon} alt="" class="w-[10%]"/>
                    <p class="font-semibold">Your Library</p>
                </div>
                <div class="flex items-center gap-3">
                    <img src={assets.arrow_icon} class="w-4" alt="" />
                    <img src={assets.plus_icon} class="w-4" alt="" />
                </div>
            </div>
            <div class="p-4  m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                <h1>Create Your Playlist</h1>
                <p class="font-light">It's easy we will help you</p>
                <button class="px-4 py-1 bg-[#6bf4f4] text-[15px] text-black rounded-full mt-4 hover:bg-[#cd5c5c] ">Create Playlist</button>
            </div>
            {/* {<div class="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
                <h1>Let's find some podcasts to follow</h1>
                <p class="font-light">we'll give you updates on new episode</p>
                <button class="px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcasts</button>
            </div>} */}
        </div>
    </div>
  )
}

export default Sidebar