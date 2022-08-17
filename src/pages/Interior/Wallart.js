import React from 'react'
import '../../pages/home.css'
import Models from '../../components/Models';
import Navbar from '../../components/Navbar';

const Wallart = () => {
      const models=["/assets/interior/wallarts/jhoomer1","/assets/interior/wallarts/jhoomer2","/assets/interior/wallarts/jhoomer3","/assets/interior/wallarts/jhoomer4","/assets/interior/wallarts/jhoomer5","/assets/interior/wallarts/jhoomer6","/assets/interior/wallarts/jhoomer7","/assets/interior/wallarts/jhoomer8","/assets/interior/wallarts/jhoomer9","/assets/interior/wallarts/jhoomer10",];
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

export default Wallart
