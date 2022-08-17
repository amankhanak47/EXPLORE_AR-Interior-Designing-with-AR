import React from 'react'
import '../../pages/home.css'
import Models from '../../components/Models';
import Navbar from '../../components/Navbar';

const Furniture = () => {
     const models=["/assets/interior/furniture/furniture1","/assets/interior/furniture/furniture2","/assets/interior/furniture/furniture3","/assets/interior/furniture/furniture4","/assets/interior/furniture/furniture5","/assets/interior/furniture/furniture6","/assets/interior/furniture/furniture7","/assets/interior/furniture/furniture8","/assets/interior/furniture/furniture9","/assets/interior/furniture/furniture10",];
  return (
      <div className='ar_scenes'>
      <Navbar opt={"Furnitures"} />
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

export default Furniture
