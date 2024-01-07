import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './style.css';
import img from './img/boat36.webp'
import img1 from'./img/boat37.webp'
import img2 from'./img/boat38.webp'
import img3 from './img/boat39.webp'
import img4 from './img/boat40.webp'
import img5 from './img/boat41.webp'
import img15 from './img/boat15.webp'
import img17 from './img/boat17.avif'
import img18 from './img/boat18.webp'
import img19 from './img/star.png'
import img36 from './img/write.png'
import img37 from './img/boat35.webp'
import img20 from './img/boat19.svg'
import img21 from './img/boat20.svg'
import img22 from './img/boat21.svg'
import img23 from './img/boat22.svg'
import img16 from './img/boat16.avif'
import img38 from './img/right-arrow.png'
import img39 from './img/boat.svg'
import img40 from './img/next.png'

export default function Gwb() {
  return (
    <div id="gwb">
      <img src={img} style={{height:'500px', width:'100%'}}/>
      <h3 style={{ marginLeft: '20px',marginTop:'40px'  }}>For <b>Special</b>Days</h3>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ marginLeft: '20px' }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" ><button className='btn3'><b>New Year</b>
              </button> <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Birthday</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Anniversary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Wedding</a>
            </li>
            
          </ul>

        </div>
      </nav>
      <div className='d-flex  justify-content-space-around'>

        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img15} class="card-img-top"  />
          <span className='tag2'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
            New Launches</span>
          <div class="card-body">
            <h5 class="card-title">Lunar peak</h5>
            <p class="card-text ">₹2999
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
            <p class="card-text ">₹2299<span style={{ color: '#12b985', marginLeft: '10px' }}>
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
            <p class="card-text">₹2999<span style={{ color: '#12b985', marginLeft: '10px' }}>
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
            <p class="card-text ">$2999
              <span style={{ color: '#12b985', marginLeft: '10px' }}>
                <b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
      </div>
      <div class='container-fluid row m-2'>
        <div class='col-6'><img src={img1} height={'400px'} width={'100%'}/></div>
        <div class='col-6'><img src={img2} height={'400px'} width={'100%'}/></div>
      </div>
      <h3 style={{ marginLeft: '20px', marginTop:'40px'  }}>For Friends & <b>Family</b></h3>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ marginLeft: '20px' }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" ><button className='btn3'><b>New Year</b>
              </button> <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Birthday</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Anniversary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Wedding</a>
            </li>
            
          </ul>

        </div>
      </nav>
      <div className='d-flex  justify-content-space-around'>

        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img15} class="card-img-top"  />
          <span className='tag3'>&nbsp; ₹500 OFF ON BIG500
            </span>
          <div class="card-body">
            <h5 class="card-title">Lunar peak</h5>
            <p class="card-text ">₹2999
              <span style={{ color: '#12b985', marginLeft: '10px' }}><b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img37} class="card-img-top" height={"352px"} />
          <span className='tag3'>&nbsp; ₹500 OFF ON BIG500
            </span>
          <div class="card-body">
            <h5 class="card-title">Airpods 16</h5>
            <p class="card-text ">₹2299<span style={{ color: '#12b985', marginLeft: '10px' }}>
              <b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img17} class="card-img-top" style={{height:"352px"}} />
          <span className='tag3'>&nbsp; ₹500 OFF ON BIG500
            </span>
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text">₹2999<span style={{ color: '#12b985', marginLeft: '10px' }}>
              <b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img18} class="card-img-top" height={"350px"} />
          <span className='tag3'>&nbsp; ₹500 OFF ON BIG500
            </span>
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text ">$2999
              <span style={{ color: '#12b985', marginLeft: '10px' }}>
                <b>69% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
      </div>
      <img src={img3} style={{height:'500px', width:'100%'}}/>
      <div className='conatiner container'>
        <div className='d-flex flex-wrap justify-content-center  '>
          {/* <h3>Today's Offer</h3> */}
          <div class="m-4" >
            <img src={img20} class="card-img-top" height={"90px"} />
            <div class="card-body">
              <h5 class="card-title" style={{ textAlign:'center' , fontSize:'17px'}}><b>1 year</b> Warrenty</h5>
            </div>
          </div>
          <div class="m-4" >
            <img src={img21} class="card-img-top" height={"90px"} />
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
              <h5 class="card-title" style={{ textAlign:'center' , fontSize:'17px'}}><b>GST</b> billing</h5>
            </div>
          </div>
        </div>
      </div>

      <div style={{marginTop:'50px'}}>
      <h3 style={{ marginLeft: '20px',  }}>By <b>Passion</b></h3>
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
              <a class="nav-link" href="#" ><button className='btn3'><b>Audiophiles</b>
              </button> <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gamer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Workoholic </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Artist</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Top Watches</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fitness</a>
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
            <p class="card-text ">₹2999 <span style={{ color: '#12b985', marginLeft: '10px' }}><b>131% off</b> </span></p>
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
            <p class="card-text ">₹2999 <span style={{ color: '#12b985', marginLeft: '10px' }}><b>131% off</b> </span></p>
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
            <p class="card-text">₹2999 <span style={{ color: '#12b985', marginLeft: '10px' }}><b>131% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
        <div class="card m-4" style={{ width: "18rem" }}>
          <img src={img18} class="card-img-top" height={"350px"} />
          <div class="card-body">
            <h5 class="card-title">Airpods 131</h5>
            <p class="card-text ">$2999 <span style={{ color: '#12b985', marginLeft: '10px', fontSize: '13px' }}><b>131% off</b> </span></p>
            <img src={img19} height={"20px"} className='para' />
            <p className='para'>Be first to review</p>
            <a href="#" class="btn btn-primary btn1">Add To Cart</a>
            <a href="#" class="btn btn-primary btn2">60 hour payback</a>
          </div>
        </div>
      </div>
      <div class='container-fluid row m-2'>
        <div class='col-6'><img src={img4} height={'400px'} width={'100%'}/></div>
        <div class='col-6'><img src={img5} height={'400px'} width={'100%'}/></div>
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
