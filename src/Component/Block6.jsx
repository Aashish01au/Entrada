import React from 'react'
import block61 from "../assets/img/block61.jpg"
import bg1 from "../assets/img/b61.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import b62 from "../assets/img/b62.jpg"
import b63 from "../assets/img/b63.jpg"

function Block6() {
    return (
        <>
            <div className="block6 py-5">
            <OwlCarousel className='owl-theme' dots={true} loop items={1} margin={10} nav>
    <div class='item'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-2 box">
                            <img width={108} height={108} className=' rounded-circle' src={bg1} alt="" />
                        </div>
                        <div className="col text-light text-center">
                            <h2 className='fw-bold' >Riya Yahida – Spain</h2>
                            <hr className='text-white'/>
                            <p className='fs-5'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit… Read More</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class='item'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-2 box">
                            <img width={108} height={108} className=' rounded-circle' src={b62} alt="" />
                        </div>
                        <div className="col text-light text-center">
                            <h2 className='fw-bold' >Jurgen Reitschild</h2>
                            <hr className='text-white'/>
                            <p className='fs-5'>his is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit… Read More</p>
                        </div>
                    </div>
                </div>
                </div>
                <div class='item'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-2 box">
                            <img width={108} height={108} className=' rounded-circle' src={b63} alt="" />
                        </div>
                        <div className="col text-light text-center">
                            <h2 className='fw-bold' >Steve Jorgan – Norway</h2>
                            <hr className='text-white'/>
                            <p className='fs-5'>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit… Read More</p>
                        </div>
                    </div>
                </div>
                </div>
</OwlCarousel>
            </div>
        </>
    )
}

export default Block6