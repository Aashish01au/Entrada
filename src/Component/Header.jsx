import React from 'react'
import logo from "../assets/img/logo.png"
import header from "../assets/img/header.jpg"
import { Link, Route,Routes } from 'react-router-dom'
import CatData from '../Data/CatData'

function Header() {
  return (
    <>
    <header className='main position-relative '>
    <div className=''>  <img className='iwdth ' src={header} alt="" /></div>
       <main className='mposition'>
      <nav className="navbar navbar-expand-lg bg-transparent p-3 rbd">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#"><img width={180} height={35} src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-light">
              <li className="nav-item dropdown ">
                  <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Destination 
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Listings 
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Activities 
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages 
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog  
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact


                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item rb">
                  <a class="nav-link" href="#"><i class="bi bi-person"></i></a>
                </li>
                <li class="nav-item rb">
                  <a class="nav-link" href="#"><i class="bi bi-cart-check"></i></a>
                </li>
                <li class="nav-item rb">
                  <a class="nav-link" href="#"><i class="bi bi-search"></i></a>
                </li>
                 </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col text-white py-5">
           <div className='pt-5'> <i class="bi bi-person-circle"></i></div>
           <div> <h1 className='fw-bold  text-uppercase py-2'>Find Adventures</h1></div>
            </div>
          </div>
          <div className="row box text-white py-3">
          <div className="col-lg-3 ">
          <div className='fs-4'> Destination</div>
            </div>
            <div className="col-lg-3">
            <div className='fs-4'> Activity</div>
            
            </div>
            <div className="col-lg-3">
            <div className='fs-4'> Month</div>
                        </div>

        <div className="row">
        <div className="col-lg-3 ">
           <div className='box1'>All Destination</div>
            </div>
            <div className="col-lg-3">
           <div className='box1'>All Activity</div>

            </div>
            <div className="col-lg-3">
           <div className='box1'>All Dates</div>
            </div>
            <div className="col-lg-3 ">
           <div className='box1 text-center fw-bold text-uppercase'>Go Wild</div>
            </div>
        </div>
          </div>
   
        </div>
        <div className="row g-0 hpb ">
          <div className="col ">
          <div className="boxd ">
          <i class="bi bi-globe-europe-africa"></i>
            <p>Bungee Jump</p>   
          </div>
             </div>
             <div className="col">
          <div className="boxd">
          <i class="bi bi-globe-europe-africa"></i>
            <p>Bungee Jump</p>   
          </div>
             </div>
             <div className="col">
          <div className="boxd">
          <i class="bi bi-globe-europe-africa"></i>
            <p>Bungee Jump</p>   
          </div>
             </div>
             <div className="col">
          <div className="boxd">
          <i class="bi bi-globe-europe-africa"></i>
            <p>Bungee Jump</p>   
          </div>
             </div>
             <div className="col">
          <div className="boxd">
          <i class="bi bi-globe-europe-africa"></i>
            <p>Bungee Jump</p>   
          </div>
             </div>
             <div className="col">
          <div className="boxd">
          <i class="bi bi-globe-europe-africa"></i>
            <p>Bungee Jump</p>   
          </div>
             </div>
             <div className="col">
          <div className="boxd text-center">
          <i class="bi bi-globe-europe-africa"></i>
            <p>Bungee Jump</p>   
          </div>
             </div>
        </div>
        </main>
    </header>
    <Routes>
      <Route path='/cat' element={<CatData/>}/>
    </Routes>
    </>
  )
}

export default Header