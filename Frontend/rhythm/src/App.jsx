import React, { useContext, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";


const App = () => {

  const {audioRef,track} = useContext(PlayerContext);

  return(
    <div class="h-screen bg-[#1e7575]">
      <div class="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto" ></audio>
    </div>
  )
}

export default App
