import React from 'react'
import b51 from "../assets/img/b51.jpg"
import b52 from "../assets/img/b52.jpg"
import b53 from "../assets/img/b53.jpg"

function Block5() {
  return (
    <>
    <div className="block5 py-5 my-5">
        <div className="container text-center">
            <h2 className='fw-bold fs-1'>Meet The Guides</h2>
            <p className='fs-5'>Our highly trained and efficient guides at your service</p>

            <div className="row">
                <div className="col-lg-4">
                    <div className="box box1 position-relative">
                        <img className='w-100' src={b51} alt="" />
                        <div className="overlay "></div>
                      <h2 className=' icon1 gap-1 bg-transparent'><i class="bi bi-facebook p-1  "></i><i class="bi bi-twitter p-1"></i></h2>
                        <div className="border py-2 bg-dark text-light">
                            <h5 className='fw-bold fs-3'>Jason Stratham</h5>
                                <p>TOURISM EXPERT</p>

                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box box1 position-relative">
                        <img className='w-100' src={b52} alt="" />
                        <h2 className=' icon1 gap-1 bg-transparent'><i class="bi bi-facebook p-1  "></i><i class="bi bi-twitter p-1"></i></h2>
                        <div className="overlay "></div>
                        <div className="border2 py-2 bg-dark text-light">
                        <h5 className='fw-bold fs-3'>Cleona Tropez</h5>
                                <p>ADVENTURE GURU</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="box box1 position-relative">
                        <img className='w-100' src={b53} alt="" />
                        <h2 className=' icon1 gap-1 bg-transparent'><i class="bi bi-facebook p-1  "></i><i class="bi bi-twitter p-1"></i></h2>
                        <div className="overlay "></div>
                        <div className="border3 py-2 bg-dark text-light">
                            <h5 className='fw-bold fs-3'>Martin Blake</h5>
                                <p>TREKKING GUIDE</p>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Block5