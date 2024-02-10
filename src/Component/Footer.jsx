import React from 'react'
import visa from "../assets/img/visa.png"

function Footer() {
  return (
    <>
    <footer className='bg-dark  py-5'>
      <div className="container ftext">
        <div className="row ">
          <div className="col-lg-2 ">
            <h5 className=' text-uppercase fw-bold'>about</h5>
            <ul className='m-0 p-0 '>
              <li><a href="">  The Company</a></li> 
              <li><a href=""> Our Values</a></li>
              <li><a href=""> Responsibility</a></li>
              <li><a href=""> Our Mission</a></li>
              <li><a href=""> Opportunity</a></li>
              <li><a href=""> Safety Concerns</a></li>

            </ul>
          </div>
          <div className="col-lg-2">
          <h5 className=' text-uppercase fw-bold'>Destinations</h5>
            <ul className='m-0 p-0'>
              <li><a href="">   Netherlands</a></li> 
              <li><a href=""> Nepal</a></li>
              <li><a href=""> Canada</a></li>
              <li><a href=""> France </a></li>
              <li><a href=""> Germany</a></li>
              <li><a href=""> United Kingdom</a></li>

            </ul>
          </div>
          <div className="col-lg-2">
          <h5 className=' text-uppercase fw-bold'>Themes</h5>
            <ul className='m-0 p-0'>
              <li><a href="">      Rural    </a></li> 
              <li><a href="">     Snow & Ice</a></li>
              <li><a href="">   Wildlife Safari</a></li>
              <li><a href="">     Hunting Trip</a></li>
              <li><a href=""> Desert</a></li>
              <li><a href=""> Mountain</a></li>

            </ul>
          </div>
          <div className="col-lg-2">
          <h5 className=' text-uppercase fw-bold'>Reservation</h5>
            <ul className='m-0 p-0'>
              <li><a href="">     Booking Conditions</a></li> 
              <li><a href="">   My Bookinws</a></li>
              <li><a href="">   Refund Policy</a></li>
              <li><a href=""> Includes & Excludes</a></li>
              <li><a href="">     Your Responsibilities</a></li>
              <li><a href="">  Order a Brochure</a></li>

            </ul>
          </div>
          <div className="col-lg-2">
          <h5 className=' text-uppercase fw-bold'> Ask Entrada</h5>
            <ul className='m-0 p-0'>
              <li><a href="">Why Entrada</a></li>
              <li><a href=""> Ask an Expert</a></li>
              <li><a href="">We Help When</a></li>
              <li><a href=""> Safety Updates</a></li>
              <li><a href="">Personalised Service</a></li>

            </ul>
          </div>
          <div className="col-lg-2">
          <h5 className=' text-uppercase fw-bold'> Ask Entrada</h5>
            <ul className='m-0 p-0'>
              <li ><a href=""> <i class="bi bi-telephone-fill pe-2"></i> (020) 72077878</a></li> 
              <li><a href=""><i class="bi bi-printer-fill pe-2"></i>(020) 72077878</a></li>
              <li><a href=""><i class="bi bi-envelope pe-1"></i>support@waituk.net</a></li>
              <li><a href=""><i class="bi bi-house-door-fill pe-2"></i>707 London Road Isleworth Middx TW7 7QD</a></li>
            </ul>
          </div>
          
        </div>
        <div className="row pt-5">
        <div className="col text-center">
          <i class="bi bi-facebook fs-2 text-light"></i> 
          </div>
          <div className="col text-center">
          <i class="bi bi-twitter fs-2 text-light"></i> 
          </div>
          <div className="col text-center">
          <i class="bi bi-instagram fs-2 text-light"></i> 
          </div>
          <div className="col text-center">
          <i class="bi bi-google fs-2 text-light"></i> 
          </div>
          <div className="col text-center">
          <i class="bi bi-youtube fs-2 text-light"></i> 
          </div>
        </div>
      </div>
      
    </footer>
    <div className="footer">
      <div className="container">
      <div className="row py-3">
          <div className="col ">
          Copyright 2016 - Entrada - An Adventure Theme - by Waituk 
          </div>
          <div className="col ms-auto text-end">
            <div><img src={visa} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer