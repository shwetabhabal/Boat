import React from 'react'
import { Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
import './style.css'
import img from './img/boat.svg'
import img1 from './img/search.png'
import img2 from './img/boat10.webp'
import img3 from './img/boat11.png'
import img4 from './img/boat12.webp'
import img5 from './img/boat13.webp'
import img6 from './img/boat14.webp'
import img7 from './img/boat15.webp'
import img8 from './img/handbag.png'
import img9 from './img/user.png'

export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white fixed-top" >
        <div class="container-fluid justify-content-center" style={{ paddingLeft: "40px" }}>
          <a class="navbar-brand" href="/">
            <img src={img} height={'35px'} />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ padding: "20px" }}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ padding: "20px" }}>
              <li class="nav-item " href='#'>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                  Categories
                </a>
                
                <table class="table dropdown-menu table-borderless">
                  <tbody>
                    <tr>
                      <td><a class="dropdown-item" href="#">
                        <img src={img2} height={'50px'} />True Wireless Earbuds</a>
                      </td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img3} height={'50px'} />Personalise Product</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img4} height={'50px'} />Neckbands</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img5} height={'50px'} />Smartwatches</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img6} height={'50px'} />Wireless headphones</a></td>
                        <td><a class="dropdown-item" href="#">
                        <img src={img2} height={'50px'} />True Wireless Earbuds</a>
                      </td>
                    </tr>
                    <tr>
                      <td><a class="dropdown-item" href="#">
                        <img src={img6} height={'50px'} />Wireless headphones</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img2} height={'50px'} />True Wireless Earbuds</a>
                      </td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img3} height={'50px'} />Personalise Product</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img4} height={'50px'} />Neckbands</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img5} height={'50px'} />Smartwatches</a></td>
                        <td><a class="dropdown-item" href="#">
                        <img src={img4} height={'50px'} />Neckbands</a></td>
                    </tr>
                    <tr>
                      <td><a class="dropdown-item" href="#">
                        <img src={img5} height={'50px'} />Smartwatches</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img6} height={'50px'} />Wireless headphones</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img2} height={'50px'} />True Wireless Earbuds</a>
                      </td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img3} height={'50px'} />Personalise Product</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img4} height={'50px'} />Neckbands</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img6} height={'50px'} />Wireless headphones</a></td>
                    </tr>
                    <tr>
                      <td><a class="dropdown-item" href="#">
                        <img src={img4} height={'50px'} />Neckbands</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img5} height={'50px'} />Smartwatches</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img6} height={'50px'} />Wireless headphones</a></td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img2} height={'50px'} />True Wireless Earbuds</a>
                      </td>
                      <td><a class="dropdown-item" href="#">
                        <img src={img3} height={'50px'} />Personalise Product</a></td>
                        <td><a class="dropdown-item" href="#">
                        <img src={img2} height={'50px'} />True Wireless Earbuds</a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
                
              </li>
              <li class="nav-item " >
                <Link class="nav-link active" aria-current="page" to="deal">Daily Deals</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="gwb">Gift with Boat</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="co">Corporate Orders</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Daily Deals</a></li>
                  <li><a class="dropdown-item" href="#">Do what you want</a></li>
                  <li><a class="dropdown-item" href="#">Neckbands</a></li>
                  <li><a class="dropdown-item" href="#">Smartwatches</a></li>
                  <li><a class="dropdown-item" href="#">True Wireless Earbuds</a></li>
                </ul>
              </li>
            </ul>

              <div class="row height d-flex justify-content-end align-items-center">
                <div class="col-6">
                  <div class="form">
                    <i class="fa fa-search"></i>
                    <input type="text" class="form-control form-input" placeholder="Search anything..." />
                  </div>
                </div>
            </div>

            <Link to='login'><img src={img9} /></Link>
            <Link to='cart'><img src={img8} /></Link>
            
          </div>
        </div>
      </nav>
    </div>
  )
}
