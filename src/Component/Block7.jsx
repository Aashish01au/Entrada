import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import a1 from "../assets/img/1.png"
import a2 from "../assets/img/2.png"
import a3 from "../assets/img/3.png"
import a4 from "../assets/img/4.png"
import a5 from "../assets/img/5.png"
import a6 from "../assets/img/6.png"
import a7 from "../assets/img/7.png"
import a8 from "../assets/img/8.png"
import a9 from "../assets/img/9.png"
import a10 from "../assets/img/10.png"
import a11 from "../assets/img/11.png"

function Block7() {
  return (
    <>
    <div className="block7 py-5">
    <div className="container">
        <h2 className='text-center fs-1 fw-bold'>PARTNER </h2>
        <p className='text-center fs-5'>  People who always support and endorse our good work </p>

        <div className="row gap-5 py-5">
        <OwlCarousel className='owl-theme' items={6}  dots={false} autoplay={true} loop margin={30}>
    <div class='item b7box'>
        <img width={140} height={70} src={a1} alt="" />
    </div>
    <div class='item b7box'>
        <img width={140} height={70}  src={a2} alt="" />
    </div>
    <div class='item b7box'>
        <img width={102} height={70}  className='w-100' src={a3} alt="" />
    </div>
    <div class='item b7box'>
        <img width={102} height={70} src={a4} alt="" />
    </div>
    <div class='item b7box'>
        <img width={86} height={70} src={a5} alt="" />
    </div>
    <div class='item b7box'>
        <img width={102} height={70} src={a6} alt="" />
    </div>
    <div class='item b7box'>
        <img width={102} height={70} src={a7} alt="" />
    </div>
    <div class='item b7box'>
        <img width={102} height={70} src={a8} alt="" />
    </div>
    <div class='item b7box'>
        <img width={102} height={70} src={a9} alt="" />
    </div>
    <div class='item'>
        <img width={102} height={70} src={a10} alt="" />
    </div>
    <div class='item'>
        <img width={102} height={70} src={a11} alt="" />
    </div>
</OwlCarousel>;
        </div>
        </div>
    </div>
    </>
  )
}

export default Block7