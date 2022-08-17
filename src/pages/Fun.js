import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Fun = () => {
  return (
    <div className='contentmain'>
      <Navbar opt="Fun" />
      <div className="contentall">
        <Link to={"/marvel"}>
          <div className="content">
            <img src="https://www.pinkvilla.com/imageresize/Avengers%20Endgame%20Leaked%20pictures%20showcase%20new%20suits%20of%20Thanos%2CThor%2C%20Hulk%20and%20others%20%281%29.jpg?width=752&format=webp&t=pvorg" alt="" />
            <div className="content_footer">
              <p>Marvel</p>
            </div>
          </div>
        </Link>
        <Link to={"/dc"}>
          <div className="content">
            <img src="https://imageio.forbes.com/blogs-images/robcain/files/2017/11/Justice-League-2.jpg?height=542&width=711&fit=bounds" alt="" />
            <div className="content_footer">
              <p>DC</p>
            </div>
          </div>
        </Link>
        <Link to={"/furniture"}>
          <div className="content">
            <img src="" alt="" />
            <div className="content_footer">
              <p></p>
            </div>
          </div>
        </Link>
        <Link to={"/furniture"}>
          <div className="content">
            <img src="" alt="" />
            <div className="content_footer">
              <p></p>
            </div>
          </div>
        </Link>
        <Link to={"/furniture"}>
          <div className="content">
            <img src="" alt="" />
            <div className="content_footer">
              <p></p>
            </div>
          </div>
        </Link>
        <Link to={"/furniture"}>
          <div className="content">
            <img src="" alt="" />
            <div className="content_footer">
              <p></p>
            </div>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Fun
