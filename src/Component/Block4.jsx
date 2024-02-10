import React from 'react'
import ProductData from '../Data/ProductData'
import 'animate.css';



function Block4() {
    return (
        <>
          <div className="block4">
          <div className="container py-5">
                <h2 className='text-center fs-1 fw-bold text-uppercase'>Best Sellers of 2016</h2>
                <p className='text-center fs-5 '>Our collection of the most popular adventures in 2016.</p>
                <div className="row py-5">
                    {ProductData.map((ii) => (
                        <div className="col-lg-4 shadow m-auto aa" key={ii.id}>
                           <div className="box">
                           <img className='wh' src={ii.thumbnail} alt="" />
                           </div>
                            <h2 className='pt-3 fw-bold fs-4 h2'>{ii.title}</h2>
                            <p className='aaa'>{ii.place}</p>
                            <hr />
                            < p className='fs-5'>{ii.description}</p>
                            <button className='bg-dark py-1 px-4 text-uppercase text-white text-center rounded fw-bold fs-5'>explore</button>
                           <hr />
                            <p className=''>from</p>
                           {/* price */}
                           <div className='d-flex justify-content-between fw-bold fs-4 gap-3' >
                                <div className='d-flex gap-3'>
                                    <p className='text-decoration-line-through text-secondary'>{ii.price}  </p>
                                <p className='p'>{ii.actualPrice}</p>
                                </div>
                                <div className=' d-flex text-end gap-3'>
                                   <p> <i class="bi bi-facebook"></i></p>
                                  <p>  <i class="bi bi-twitter"></i></p>
                                </div>
                            </div>
                            {/* end */}
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Block4