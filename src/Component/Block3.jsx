import React from 'react'
import block3  from "../assets/img/block3.jpg"
import block32 from "../assets/img/block32.jpg"
import 'animate.css';


function Block3() {
  return (
    <>
    <div className="block3 ">
            <div className="row g-0 d-flex align-items-center justify-content-between">
                <div className="col-lg-6 ani">
                    <img className='w-100 ' src={block3} alt="" />
                </div>
                <div className="col-lg-6 txt p-5 text-center  ">
                <div className="py-5">
                <h2 className='text-center pt py-3'>Hiking Trip to Mountain X</h2>
            <p className=' text-start pb-3 fs-6'>Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar impossible sentiments. </p>
          <button className='bt3n '>explore</button>
                </div>
                </div>
                <div className="col-lg-6 txt p-5 text-center  ">
                <div className="">
                <h2 className='text-center pt py-3'>Hiking Trip to Mountain X</h2>
            <p className=' text-start pb-3 fs-6'>Son agreed others exeter period myself few yet nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar impossible sentiments. </p>
          <button className='bt3n '>explore</button>
                </div>
                </div>
                <div className="col-lg-6">
                    <img className='w-100' src={block32} alt="" />
                </div>
              <div className="col-lg-6  bg1">
             <div> <p className=' text-center'>BROWSE BY DESTINATION</p></div>
              </div>
              <div className="col-lg-6   bg2 ">
             <div> <p className=' text-center'>BROWSE BY DESTINATION</p></div>
              </div>
            </div>
    </div>
    </>
  )
}

export default Block3