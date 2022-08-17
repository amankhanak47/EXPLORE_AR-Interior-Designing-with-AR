import React from 'react'
import '../../pages/home.css'
import Models from '../../components/Models';
import Navbar from '../../components/Navbar';

const Monument = () => {
    const models=["/assets/interior/furniture/chair","/assets/interior/furniture/chairAR","/assets/interior/furniture/sofaAR"];
  return (
      <div className='ar_scenes'>
      <Navbar opt={"Monuments"} />
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

export default Monument
