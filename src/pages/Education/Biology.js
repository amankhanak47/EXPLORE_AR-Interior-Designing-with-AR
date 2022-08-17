import React from 'react'
import '../../pages/home.css'
import Models from '../../components/Models';
import Navbar from '../../components/Navbar';

const Biology = () => {
     const models=["/assets/education/biology/skull","/assets/education/biology/skull"];
     
  return (
       <div className='ar_scenes'>
      <Navbar opt={"Biology"} />
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

export default Biology
