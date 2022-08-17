import React from 'react'
import '../../pages/home.css'
import Models from '../../components/Models';
import Navbar from '../../components/Navbar';

const Electronics = () => {
     const models=["/assets/interior/electronics/electronic4","/assets/interior/electronics/electronic5","/assets/interior/electronics/electronic6","/assets/interior/electronics/electronic7","/assets/interior/electronics/electronic1","/assets/interior/electronics/electronic2","/assets/interior/electronics/electronic8","/assets/interior/electronics/electronic9","/assets/interior/electronics/electronic10","/assets/interior/electronics/electronic3",];
  return (
      <div className='ar_scenes'>
      <Navbar opt={"Electronics"} />
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

export default Electronics
