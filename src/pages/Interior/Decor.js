import React from 'react'
import '../../pages/home.css'
import Models from '../../components/Models';
import Navbar from '../../components/Navbar';

const Decor = () => {
      const models=["/assets/interior/decor/decoration6","/assets/interior/decor/decoration7","/assets/interior/decor/decoration8","/assets/interior/decor/decoration9","/assets/interior/decor/decoration10","/assets/interior/decor/decoration1","/assets/interior/decor/decoration2","/assets/interior/decor/decoration3","/assets/interior/decor/decoration4","/assets/interior/decor/decoration5"];
  return (
      <div className='ar_scenes'>
      <Navbar opt={"Home Decorations"} />
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

export default Decor
