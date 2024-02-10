import React from 'react'
import ProductData from '../Data/ProductData'


function Block2(props) {
  return (
    <>
  <div className="block2">
  <div className="container py-5">
    <h2 className='text-center fs-1 fw-bold text-uppercase'>popular tours</h2>
     <p className='text-center fs-5 '>We have a unique way of meeting your adventurous expectations!</p>
        <div className="row py-5">
          {ProductData.slice(0,6).map((ii)=>(
              <div className="col-lg-4" key={ii.id}>
             <div className="box1">
             <img className='wh ' src={ii.thumbnail} alt="" />
            <div className=" overlay"></div>
             </div>
                <h2 className='pt-3 fw-bold fs-4'>{ii.title}</h2>
                < p className='fs-5'>{ii.description}</p>
              </div>
          ))}
        </div>
    </div>
  </div>
    </>
  )
}

export default Block2