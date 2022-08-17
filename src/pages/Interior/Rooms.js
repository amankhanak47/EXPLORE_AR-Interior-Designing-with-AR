import React from 'react'
import '../../pages/home.css'
import Models from '../../components/Models';
import Navbar from '../../components/Navbar';

const Rooms = () => {
      const models=["/assets/interior/rooms/room1","/assets/interior/rooms/room2","/assets/interior/rooms/room3","/assets/interior/rooms/room4","/assets/interior/rooms/room5","/assets/interior/rooms/room6","/assets/interior/rooms/room7","/assets/interior/rooms/room8","/assets/interior/rooms/room9","/assets/interior/rooms/room10"];
  return (
      <div className='ar_scenes'>
      <Navbar opt={"Rooms"} />
      <div className="all_ars">
        {models.map((mod) => 
          <>
            <div className="scene">

      <Models model={mod}/>
            </div>
        </>
      )}
      
      </div>
    </div>
  )
}

export default Rooms
