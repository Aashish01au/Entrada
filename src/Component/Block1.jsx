import React from 'react'
import beach from "../assets/img/beach.jpg"
import desert from "../assets/img/desert.jpg"
import iconic from "../assets/img/iconic.jpg"
import jungle from "../assets/img/jungle.jpg"
import mountain from "../assets/img/mountain.jpg"
import rurral from "../assets/img/rurral.jpg"
import snow from "../assets/img/snow.jpg"
import urban from "../assets/img/urban.jpg"
import water from "../assets/img/water.jpg"
import 'animate.css';

function Block1() {
  return (
    <>
    <div className="block1">
    <div className="container py-5">
        <h1 className='text-center fw-bold text-uppercase'>The Adventures</h1>
        <p className='text-center fs-5'>Mastering the art of perfect adventure for 10+ years in the wild?</p>
        <div className="row py-5">

          <div className="col-6">
            <div className="row g-3">
              <div className="col-4 box1 position-relative ">
                <img className='w-100' src={beach} alt="" />
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-1-circle"></i></div>
                <p className=' txtp'> beach</p>
              </div>
              <div className="col-4 box1 position-relative ">
                <img className='w-100' src={desert} alt="" />
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-2-circle animate__animated animate__bounceIn"></i></div>
                <p className=' txtp '> desert</p>
              </div>
              <div className="col-4 box1 position-relative">
                <img className='w-100' src={iconic} alt="" />
                <p className=' txtp'> iconic</p>
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-3-circle"></i></div>
              </div>
              <div className="col-4 box1 position-relative">
                <img className='w-100' src={jungle} alt="" />
                <p className=' txtp'> jungle</p>
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-4-circle"></i></div>
              </div>
              <div className="col-4 box1 position-relative">
                <img className='w-100' src={mountain} alt="" />
                <p className=' txtpm'> mountain</p>
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-5-circle"></i></div>
              </div>
              <div className="col-4 box1  position-relative">
                <img className='w-100' src={rurral} alt="" />
                <p className=' txtp '> rurral</p> <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-6-circle "></i></div>
               
              </div>
              <div className="col-4 box1 position-relative">
                <img className='w-100' src={snow} alt="" />
                <p className=' txtps'> snow & ice</p>
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-7-circle"></i></div>
              </div>
              <div className="col-4 box1 position-relative">
                <img className='w-100' src={urban} alt="" />
                <p className=' txtp'> urban</p>
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-8-circle"></i></div>
              </div>
              <div className="col-4 box1 position-relative ">
                <img className='w-100' src={water} alt="" />
                <p className=' txtp'> water</p>
                <div className="overlay d-flex justify-content-center  align-items-center "><i class="bi bi-9-circle"></i></div>
              </div>
            </div>
          </div>
          <div className="col m-5">
            <h2 className='pt py-3'>Living a Life of Adventure</h2>
            <p className=' lt'> This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
          <button className='bttn rounded-pill'>explore</button>
          </div>
        </div>

      </div>

      <div className='bg1'>
        <p>Get special discount on select treks, this week. Call +1 5775 7525</p>
      </div>

    </div>
     



    </>
  )
}

export default Block1