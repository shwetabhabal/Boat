import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
import './style.css';
import img from './img/headphn.webp'
import img1 from './img/boat1.webp'
import img2 from './img/boat2.webp'
import img3 from './img/boat3.webp'
import img4 from './img/boat4.webp'
import vid1 from './img/vid1.mp4'
import vid2 from './img/vid2.mp4'
import vid3 from './img/vid3.mp4'
import vid4 from './img/vid4.mp4'
import img5 from './img/boat5.webp'
import img6 from './img/boat6.webp'
import img7 from './img/boat7.webp'
import img8 from './img/boat8.webp'
import img9 from './img/boat9.webp'
import img10 from './img/boat10.webp'
import img11 from './img/boat11.png'
import img12 from './img/boat12.webp'
import img13 from './img/boat13.webp'
import img14 from './img/boat14.webp'
import img15 from './img/boat15.webp'
import img16 from './img/boat16.avif'
import img17 from './img/boat17.avif'
import img18 from './img/boat18.webp'
import img19 from './img/star.png'
import img20 from './img/boat19.svg'
import img21 from './img/boat20.svg'
import img22 from './img/boat21.svg'
import img23 from './img/boat22.svg'
import img24 from './img/boat23.webp'
import img25 from './img/boat24.webp'
import img26 from './img/boat25.webp'
import img27 from './img/boat26.webp'
import img28 from './img/boat27.webp'
// import ArrowCircleRight from '@mui/icons-material/ArrowCircleRight';
import vid5 from './img/vid5.mp4'
import vid6 from './img/vid6.mp4'
import vid7 from './img/vid7.mp4'
import vid8 from './img/vid8.mp4'
import vid9 from './img/vid9.mp4'
import img29 from './img/boat28.webp'
import img30 from './img/boat29.webp'
import img31 from './img/boat30.webp'
import img32 from './img/boat31.webp'
import img33 from './img/boat32.avif'
import img34 from './img/boat33.avif'
import img35 from './img/boat34.webp'
import img36 from './img/write.png'
import img37 from './img/boat35.webp'
import img38 from './img/right-arrow.png'
import img39 from './img/boat.svg'
import img40 from './img/next.png'

export default function Home() {
  return (
    <div className='home' id='/'>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={img2} class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src={img4} class="d-block w-100" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" style={{ align: "center" }}
          data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className='container'> */}
      <h4 style={{ marginLeft: '12px' }}>Explore <b>Bestsellers </b></h4>
      <div className=' d-flex justify-content-center '>

        <div class="m-2" style={{ width: "20rem" }}>
          <video src={vid1} height='300px' class="card-img-top" autoPlay muted loop />
          <div class="card-body">
            <h5 class="card-title title">Smartwatch</h5>
          </div>
        </div>
        <div class=" m-2" style={{ width: "20rem" }}>
          <video src={vid2} height='300px' class="object-fit-fill border rounded" autoPlay muted loop />
          <div class="card-body">
            <h5 class="card-title title">Wireless headphones</h5>
          </div>
        </div>
        <div class="m-2" style={{ width: "20rem" }}>
          <video src={vid3} height='300px' class="object-fit-fill border rounded" autoPlay muted loop />
          <div class="card-body">
            <h5 class="card-title title">Neckbands</h5>
          </div>
        </div>
        <div class="m-2" style={{ width: "22rem" }}>
          <video src={vid4} height='300px' class="object-fit-fill border rounded" autoPlay muted loop />
          <div class="card-body">
            <h5 class="card-title title">Headphones</h5>
          </div>
        </div>
      </div>

      <h3 style={{ marginLeft: '12px' }}>Today's Offer</h3>
      <img src={img9} style={{width:"100%"}}/>
      <div className='d-flex justify-content-space-around'>
        <div class="card m-3" style={{ width: "18rem" }}>
          <img src={img5} class="card-img-top" height={""} />
          <span className='tag'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            Engraving Available</span>
          <div class="card-body">
            <h5 class="card-title">Airpods 231</h5>
            <p class="card-text">₹99 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
            <span style={{color: '#12b985', marginLeft: '10px'}}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>4.8</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">2999 hour payback</a>
          </div>
        </div>
        <div class="card m-3" style={{ width: "18rem" }}>
          <img src={img6} class="card-img-top" />
          <span className='tag'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            Engraving Available</span>
          <div class="card-body">
            <h5 class="card-title">Airpods 121</h5>
            <p class="card-text">₹99 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
            <span style={{ color: '#12b985',marginLeft: '10px' }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>4.8</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">229999 hour payback</a>

          </div>
        </div>
        <div class="card m-3" style={{ width: "18rem" }}>
          <img src={img7} class="card-img-top" style={{height:"352px"}} />
          <span className='tag'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            Engraving Available</span>
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text">₹2999 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
             <span style={{color: '#12b985',marginLeft: '10px' }}><b>131% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>4.8</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">229999 hour payback</a>

          </div>
        </div>
        <div class="card m-3" style={{ width: "18rem" }}>
          <img src={img8} class="card-img-top" />
          <span className='tag'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            Engraving Available</span>
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text">₹399 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
              <span class='visually-hidden'>₹2999</span> <span style={{
                color: '#12b985',
                marginLeft: '10px'
              }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>4.8</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn  btn2">60 hour payback</a>

          </div>
        </div>
      </div>

      <h4 style={{ marginLeft: '22px' }}>Shop By <b>Categories</b></h4>
      <a href="#" class="btn5 btn6" style={{ marginTop: '-50px' }}>
              View all&nbsp;<img src={img38} />
            </a>
      <div class='container-fluid d-flex justify-content-center'>
        <div class=" m-4" style={{ width: "18rem;" }}>
          <img src={img10} class="card-img-top" height='80px' width='40px'/>
          <div class="card-body">
            <h6 class="card-title title2">True Wireless Earbuds</h6>
          </div>
        </div>
        <div class=" m-4" style={{ width: "18rem;" }}>
          <img src={img11} class="card-img-top" height='80px' width='40px' />
          <div class="card-body">
            <h6 class="card-title title2">Neckbands</h6>
          </div>
        </div>
        <div class="m-4" style={{ width: "18rem;" }}>
          <img src={img12} class="card-img-top" height='80px' width='40px' />

          <div class="card-body">
            <h6 class="card-title title2">Smartwatches</h6>
          </div>
        </div>
        <div class="m-4" style={{ width: "18rem;" }}>
          <img src={img13} class="card-img-top" height='80px' />

          <div class="card-body">
            <h6 class="card-title title2">Wireless headphones</h6>
          </div>
        </div>
        <div class=" m-4" style={{ width: "18rem;" }}>
          <img src={img14} class="card-img-top" height='80px' />

          <div class="card-body">
            <h6 class="card-title title2">Wireless speaker</h6>
          </div>
        </div>
        <div class=" m-4" style={{ width: "18rem;" }}>
          <img src={img10} class="card-img-top" height='80px' />

          <div class="card-body">
            <h6 class="card-title">Wireless headphones</h6>
          </div>
        </div>
        <div class="m-4" style={{ width: "18rem;", height: "200px" }}>
          <img src={img11} class="card-img-top" height='80px' />

          <div class="card-body">
            <h6 class="card-title">Neckbands</h6>
          </div>
        </div>
        <div class=" m-4" style={{ width: "18rem;", height: "200px" }}>
          <img src={img12} class="card-img-top" height='80px' />

          <div class="card-body">
            <h6 class="card-title">Smartwatches</h6>
          </div>
        </div>
        <div class=" m-3" style={{ width: "18rem;", height: "100px" }}>
          <img src={img13} class="card-img-top" height='80px' />

          <div class="card-body">
            <h6 class="card-title title2">Wireless headphones</h6>
          </div>
        </div>
        <div class=" m-3" style={{ width: "18rem;" }}>
          <img src={img35} class="card-img-top" height='80px' />

          <div class="card-body">
            <h6 class="card-title title2">Wired headphones</h6>
          </div>
        </div>


      </div>
     
      <h3 style={{ marginLeft: '25px' }}>New <b>Launches</b></h3>
      <div className='d-flex  justify-content-space-around'>

        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img15} class="card-img-top"  />
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body">
            <h5 class="card-title">Lunar peak</h5>
            <p class="card-text ">₹999 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
              <span style={{ color: '#12b985', marginLeft: '10px' }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img37} class="card-img-top" height={"352px"} />
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body">
            <h5 class="card-title">Airpods 16</h5>
            <p class="card-text ">₹299&nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
            <span style={{ color: '#12b985', marginLeft: '10px' }}>
              <b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img17} class="card-img-top"  style={{height:"352px"}}/>
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text">₹2999&nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
            <span style={{ color: '#12b985', marginLeft: '10px' }}>
              <b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img18} class="card-img-top" height={"350px"} />
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text ">$2999&nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
              <span style={{ color: '#12b985', marginLeft: '10px' }}>
                <b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
      </div>

      <div className='conatiner container'>
        <div className='d-flex flex-wrap justify-content-center'>
          {/* <h3>Today's Offer</h3> */}
          <div class="m-4" >
            <img src={img20} class="card-img-top" height={"90px"} />
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign:'center' , fontSize:'17px'}}><b>1 year</b> Warrenty</h5>
            </div>
          </div>
          <div class="m-4" >
            <img src={img21} class="card-img-top" height={'90px'}/>
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign:'center' , fontSize:'17px'}}><b>7-days</b> Replacement</h5>
            </div>
          </div>
          <div class="m-4" >
            <img src={img22} class="card-img-top" height={"90px"} />
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign:'center' , fontSize:'17px'}}><b>Free</b> Shipping</h5>
            </div>
          </div>
          <div class="m-4" >
            <img src={img23} class="card-img-top" height={"90px"} />
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign:'center' , fontSize:'17px'}}>
                <b>GST</b> billing</h5>
            </div>
          </div>
        </div>

      </div>
      <h3 style={{ marginLeft: '22px', marginTop: '30px' }}>Shop by <b>Lifestyle</b></h3>
      <div class="d-flex justify-content-center">
        <div class="m-2" style={{ width: "18rem;" }}>
          <img class="card-img-top" src={img24} style={{ height: '350px', width: '250px' }} />
          <div class="card-body" style={{ backgroundColor: '#e0ebeb' }}>
            <h5 class="card-title title2" >For Fitness</h5>
            <a href="#" class="btn5" >
              View all&nbsp;<img src={img38} />
            </a>
          </div>
        </div>
        <div class="m-2" style={{ width: "18rem;" }}>
          <img class="card-img-top" src={img25} style={{ height: '350px', width: '250px' }} />
          <div class="card-body" style={{ backgroundColor: '#e0ebeb' }}>
            <h5 class="card-title title2" >For parties</h5>
            <a href="#" class="btn5 " >
              View all&nbsp;<img src={img38} />
            </a>
          </div>
        </div>
        <div class=" m-2" style={{ width: "18rem;" }}>
          <img class="card-img-top" src={img26} style={{ height: '350px', width: '250px' }} />
          <div class="card-body" style={{ backgroundColor: '#e0ebeb' }}>
            <h5 class="card-title title2" >For Work</h5>
            <a href="#" class=" btn5" >
              View all&nbsp;<img src={img38} />
            </a>
          </div>
        </div>
        <div class="m-2" style={{ width: "18rem;" }}>
          <img class="card-img-top" src={img27} style={{ height: '350px', width: '250px' }} />
          <div class="card-body" style={{ backgroundColor: '#e0ebeb' }}>
            <h5 class="card-title title2">For Entertainment</h5>
            <a href="#" class=" btn5" >
              View all&nbsp;<img src={img38} />
            </a>
          </div>
        </div>
        <div class=" m-2" style={{ width: "18rem;" }}>
          <img class="card-img-top" src={img28} style={{ height: '350px', width: '250px' }} />
          <div class="card-body" style={{ backgroundColor: '#e0ebeb' }}>
            <h5 class="card-title title2" >For Audiophiles</h5>
            <a href="#" class=" btn5" >
              View all&nbsp;<img src={img38} />
            </a>
          </div>
        </div>

      </div>
      <div style={{marginTop:'50px'}}>

      <h3 style={{ marginLeft: '20px',  }}>Best of <b>boAt</b></h3>
      <a href="#" class="btn5 btn6" >
              View all&nbsp;<img src={img38} />
            </a>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ marginLeft: '20px' }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" ><button className='btn3'><b>Best Seller</b>
              </button> <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Theatre System & Soundbars</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Top Earbuds</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Top Watches</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Car Watches</a>
            </li>
          </ul>

        </div>
      </nav>
      </div>

      <div className='container-fluid d-flex justify-content-space-between'>

        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img15} class="card-img-top" height={"350px"} />
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text ">₹2999&nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
             <span style={{ color: '#12b985', marginLeft: '10px' }}><b>131% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img16} class="card-img-top" height={"352px"} />
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text ">₹2999 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
            <span style={{ color: '#12b985', marginLeft: '10px' }}><b>131% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img17} class="card-img-top" height={"352px"} />
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text">₹2999 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
            <span style={{ color: '#12b985', marginLeft: '10px' }}><b>131% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img18} class="card-img-top" height={"352px"} />
          <div class="card-body">
            <h5 class="card-title">Airpods 132</h5>
            <p class="card-text ">$2999 &nbsp;
            <del style={{color: '#b8b894'}}>1999 &nbsp;</del> 
            <span style={{ color: '#12b985', marginLeft: '10px', fontSize: '13px' }}><b>131% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
      </div>
      <h3 style={{ marginLeft: '20px' }}>Join the <b>Tribe</b></h3>
     
      <div className='container-fluid d-flex justify-content-center ' style={{ margin: '0px' }}>

        <div class="card m-2" style={{ width: "18rem" }}>
          <video src={vid5} class="card-img-top" autoPlay muted loop />
          {/* <div > */}
          <img src={img33} className='img' />
          {/* </div> */}
          <div class="card-body">
            <h5 class="card-title title">Strom call 2</h5>
            <p className='card-text title'>₹ 1999  <span style={{
              color: '#12b985',
              marginLeft: '10px'
            }}><b>131% off</b> </span></p>

          </div>
        </div>
        <div class="card m-2" style={{ width: "18rem" }}>
          <video src={vid6} class="object-fit-fill border rounded" autoPlay muted loop />
          <img src={img34} className='img' />

          <div class="card-body">
            <h5 class="card-title title">Wave elevate</h5>
            <p className='card-text title'>₹ 1,399  <span style={{ color: '#12b985', marginLeft: '10px' }}><b>131% off</b> </span></p>

          </div>
        </div>
        <div class="card m-2" style={{ width: "18rem" }}>
          <video src={vid7} class="object-fit-fill border rounded" autoPlay muted loop />
          <img src={img33} className='img' />

          <div class="card-body">
            <h5 class="card-title title">Stone egnite</h5>
            <p className='card-text title'>₹ 1,399  <span style={{ color: '#12b985', marginLeft: '10px' }}><b>69% off</b> </span></p>
          </div>
        </div>
        <div class="card m-2" style={{ width: "18rem" }}>
          <video src={vid8} class="object-fit-fill border rounded" autoPlay muted loop height={'405px'} />
          <img src={img33} className='img' />
          <div class="card-body">
            <h5 class="card-title title" >Primia celestial</h5>
            <p className='card-text title'>₹ 1,399  <span style={{ color: '#12b985', marginLeft: '10px' }}><b>69% off</b> </span></p>

          </div>
        </div>
        <div class="card m-2" style={{ width: "18rem" }}>
          <video src={vid9} class="object-fit-fill border rounded" autoPlay muted loop />
          <img src={img34} className='img' />
          <div class="card-body">
            <h5 class="card-title title">AD 161 deadpool</h5>
            <p className='card-text title'>₹ 1,399  <span style={{ color: '#12b985', 
            marginLeft: '10px' }}><b>69% off</b> </span></p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <h3 style={{ marginLeft: '20px' }}> <b>Blogs</b></h3>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
          <div class="card m-2" style={{ width: "25%" }}>
            <img class="card-img-top" src={img29} alt="Card image cap" />
            <div class="card-body">
              <h6 class="card-title" style={{ color: 'grey' }}>9/11/23</h6>
              <h6 class="card-title">The Power of Personalisation: Custom Watch Faces in Wearables</h6>
              <p class="card-text text">We live in a world where your wristwatch can become an extension of your personality. With the advent of custom watch faces and the rise </p>
              <a href="#" class="btn btn-primary btn4">Read More <img src={img38}/></a>
            </div>
          </div>
          <div class="card m-2" style={{ width: "25%" }}>
            <img class="card-img-top" src={img30} alt="Card image cap" />
            <div class="card-body">
              <h6 class="card-title" style={{ color: 'grey' }}>9/11/23</h6>
              <h6 class="card-title">What is Active Noise Cancellation and Why is it Important?</h6>
              <p class="card-text text">Admit it, boAt fam: There’s no greater vibe killer than outside noise leaking into your blissful, headphone listening experience – that too at the just</p>
              <a href="#" class="btn btn-primary btn4">Read More <img src={img38}/></a>
            </div>
          </div>
          <div class="card m-2" style={{ width: "25%" }}>
            <img class="card-img-top" src={img31} alt="Card image cap" />
            <div class="card-body" style={{ backgroundColor: '' }}>
              <h6 class="card-title" style={{ color: 'grey' }}>9/11/23</h6>
              <h5 class="card-title">Aman Gupta boat (shark tank india.)</h5>
              <p class="card-text text">we know you keep searching for things on the internet — after all, what better source is there in our times. People search for all kinds of things online</p>
                <a href="#" class="btn btn-primary btn4">Read More <img src={img38}/></a>
            </div>
          </div>
          <div class="card m-2" style={{ width: "25%" }}>
            <img class="card-img-top" src={img32} alt="Card image cap" />
            <div class="card-body">
              <h6 class="card-title" style={{ color: 'grey' }}>9/11/23</h6>
              <h6 class="card-title">One watch, different looks: Match your watch face with your outfit</h6>
              <p class="card-text text">There is a look for every walk of life. Find inspiration to make your own look with customisable watch faces ranging from why are we born to Shark Tank</p>
                <a href="#" class="btn btn-primary btn4">Read More <img src={img38}/></a>
            </div>
          </div>
        </div>
      </div>
      
      <footer >
        <div class=" row g-0 mt-2 text-justify ">
          <div class=" col-4 mt-2  ftr" >
            <img src={img39} />
            <h4 style={{ marginTop: '20px' }}><b >Subscribe to our emails alerts</b></h4>
            <div class="wrap">
              <div class="search" style={{position:"absolute",left:"-284px",top:"10px"}}>
                <input type="text" class="searchTerm" placeholder="Enter your Email" style={{width:"500px"}}/>
                <button type="submit" class="searchButton">
                  <img src={img40} />
                  {/* <i class="fa fa-search"></i> */}
                </button>
              </div>
            </div>
          </div>
          <div class="col-3 ftr">
            <table class=" font" >
              
              <tr><th scope="row">Shop</th></tr><br/>
              <tr><td scope="row">True Wireless Earbuds</td>
              <td scope="row" class='px-2'>Wired Earbuds</td>
              </tr>
              <tr><td scope="row">Neckbands</td>
              <td scope="row" class='px-2' >Wireless speaker</td></tr>
              <tr><td scope="row">Smartwatches</td>
              <td scope="row"  class='px-2'>Mobile Accessories</td></tr>
              <tr><td scope="row">Wireless headphones</td>
              <td scope="row" class='px-2'>TRebel</td></tr>
              <tr><td scope="row" >Neckbands</td>
              <td scope="row" class='p-2'>Earn ₹100</td></tr>
              
              
            </table>
          </div>
          <div class="col-2 ftr">
          <table class=" font" >
              
              <tr><th scope="row">Help</th></tr><br/>
              <tr><td scope="row">True Wireless Earbuds</td>
              </tr>
              <tr><td scope="row">Neckbands</td></tr>
              <tr><td scope="row">Smartwatches</td></tr>
              <tr><td scope="row">Wireless headphones</td></tr>
              <tr><td scope="row" >Neckbands</td></tr>
              
              
            </table>
             </div>
          <div class="col-2 ftr">
          <table class=" font" >
              
              <tr><th scope="row">Company</th></tr><br/>
              <tr><td scope="row">True Wireless Earbuds</td>
              </tr>
              <tr><td scope="row">Neckbands</td></tr>
              <tr><td scope="row">Smartwatches</td></tr>
              <tr><td scope="row">Wireless headphones</td></tr>
              <tr><td scope="row" >Neckbands</td></tr>
              
              
            </table>
             </div>

        </div>
      </footer>
    </div>
  )
}
