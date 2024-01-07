import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './style.css';
import img from './img/boat42.webp'
import img1 from './img/Card1.webp'
import img2 from './img/card2.webp'
import img3 from './img/card3.webp'
import img4 from './img/Elements.webp'
import img5 from './img/boat43.webp'
import img15 from './img/boat15.webp'
import img17 from './img/boat17.avif'
import img18 from './img/boat18.webp'
import img19 from './img/star.png'
import img36 from './img/write.png'
import img37 from './img/boat35.webp'
import img24 from './img/boat23.webp'
import img25 from './img/boat24.webp'
import img26 from './img/boat25.webp'
import img27 from './img/boat26.webp'
import img28 from './img/boat27.webp'
import img38 from './img/right-arrow.png'
import img39 from './img/boat.svg'
import img40 from './img/next.png'

export default function Order() {
    return (
        <div id='co'>
            <img src={img} style={{ height: '600px', width: '100%' }} />
            <h4 style={{ textAlign: 'center', marginTop: '30px' }}><b>Got A Big boAt Order?</b></h4>
            <p style={{ textAlign: 'center' }}>For shipments of 25 units or more, hit us up! </p>
            <button style={{
                background: 'black', color: 'white', height: '50px', width: '400px',
                borderRadius: '10px', marginLeft: '35%'
            }}>
                <h5><b>Submit your Requirement</b></h5>
            </button>
            <div class='boat flex-wrap d-flex justify-content-around ' style={{ backgroundColor: '#ebebe0', height: '1000px' }}>
                <div class="card my-5" style={{height:'330px', width:'330px', borderRadius:'25px'}}>
                    <img class="card-img-top" src={img1} alt="Card image cap" />
                </div>
                <div class="card my-5" style={{height:'330px', width:'330px',borderRadius:'25px'}}>
                    <img class="card-img-top" src={img2} alt="Card image cap" />
                </div>
                <div class="card my-5" style={{height:'330px', width:'330px',borderRadius:'25px'}}>
                    <img class="card-img-top" src={img3} alt="Card image cap" />
                </div>
                <img src={img4} style={{height:"400px"}}/>
                <button style={{height:"50px", width:"200px", backgroundColor:"black", color:"white",borderRadius: '10px', position:"absolute", marginTop:"930px"}}>View all products</button>
            </div>
            <h3 style={{ marginLeft: '25px' }}>Get a <b>boAt</b></h3>
      <div className='d-flex  justify-content-space-around'>

        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img15} class="card-img-top"  style={{height:"300px"}}/>
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body" >
            <h5 class="card-title">Lunar peak</h5>
            <p class="card-text ">₹2999
              <span style={{ color: '#12b985', marginLeft: '10px',fontSize:"13px" }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            {/* <a href="#" class="btn btn-primary btn1">Add To Cart</a> */}
            <button style={{background: 'black', color: 'white', height: '40px', width: '250px',
                borderRadius: '10px',}}>Buy 5 at ₹1255/-per items</button>
            <a href="#" class="btn btn-primary btn7">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img17} class="card-img-top"  style={{height:"300px"}}/>
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body" >
            <h5 class="card-title">Lunar peak</h5>
            <p class="card-text ">₹2999
              <span style={{ color: '#12b985', marginLeft: '10px',fontSize:"13px" }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            {/* <a href="#" class="btn btn-primary btn1">Add To Cart</a> */}
            <button style={{background: 'black', color: 'white', height: '40px', width: '250px',
                borderRadius: '10px',}}>Buy 5 at ₹1255/-per items</button>
            <a href="#" class="btn btn-primary btn7">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img18} class="card-img-top"  style={{height:"300px"}}/>
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body" >
            <h5 class="card-title">Lunar peak</h5>
            <p class="card-text ">₹2999
              <span style={{ color: '#12b985', marginLeft: '10px',fontSize:"13px" }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            {/* <a href="#" class="btn btn-primary btn1">Add To Cart</a> */}
            <button style={{background: 'black', color: 'white', height: '40px', width: '250px',
                borderRadius: '10px',}}>Buy 5 at ₹1255/-per items</button>
            <a href="#" class="btn btn-primary btn7">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img37} class="card-img-top"  style={{height:"300px"}}/>
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body" >
            <h5 class="card-title">Lunar peak</h5>
            <p class="card-text ">₹2999
              <span style={{ color: '#12b985', marginLeft: '10px',fontSize:"13px" }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            {/* <a href="#" class="btn btn-primary btn1">Add To Cart</a> */}
            <button style={{background: 'black', color: 'white', height: '40px', width: '250px',
                borderRadius: '10px',}}>Buy 5 at ₹1255/-per items</button>
            <a href="#" class="btn btn-primary btn7">60 hour payback</a>
          </div>
        </div>
      </div>
      <h4 style={{ marginLeft: '22px', marginTop: '30px' }}>Explore <b>Categories</b></h4>
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
      <img src={img5} style={{width:"100%"}}/>
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
