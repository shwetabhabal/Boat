import React from 'react'
import array from './myapi'
import edit from './img/edit.png'
import { useEffect, useState } from 'react'
import { addcart } from './Todoslice'
import { useDispatch } from 'react-redux'
import img36 from './img/write.png'
import img19 from './img/star.png'
import './style.css';


export default function Deal() {
    const dispatch=useDispatch()
    // const [data, setdata] = useState([])

    // const api = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products/")
    //     const result = await response.json()
    //     setdata(result)
    // }

    // useEffect(() => {
    //     api()
    // })
    return (
        <div id="deal">
            <h3 style={{ marginLeft: '20px', marginTop: '100px' }}> <b>Daily Deals</b></h3>
            <div class="dropdown" >
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#eff4f7", marginLeft:'15px',display:"flex",}}>
                   <img src={edit}/>
                    <h6 style={{}}>Filter By</h6>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>

                {
                    array.map((value, index) => {
                        return (

                            // <div class="card m-2" style={{ width: "18rem" }} >
                            //     <img src={value.image} class="card-img-top" />
                            //     <div class="card-body">
                            //         <h5 class="card-title">{value.name}</h5>
                            //         <p class="card-text">{value.price}</p>
                            //         <p class="card-text">{value.info}</p>
                            //         {/* <a href="#" class="btn btn-dark">{value.mrp}</a> */}
                            //         <button onClick={()=>{dispatch(addcart(value))}}  className="btn"><i className="fab fa-github" />ADD CART</button>
                            //     </div>
                            // </div>
                            
                            <div class="card m-3" style={{ width: "18rem" }}>
                            <img src={value.image} class="card-img-top" height={"352px"} />
                            <span className='tag'><img src={img36} height='15px' marginLeft='15px' />&nbsp;
                              Engraving Available</span>
                            <div class="card-body">
                              <h5 class="card-title">{value.name} </h5>
                              <p class="card-text">{value.price} &nbsp;
                              <del style={{color: '#b8b894'}}>{value.mrp} &nbsp;</del> 
                              <span style={{color: '#12b985', marginLeft: '10px'}}><b>69% off</b> </span></p>
                              <img src={img19} height={"20px"} className='para' />
                              <p className='para'>4.8</p>
                              {/* <a href="#" class="btn btn-primary btn1">Add To Cart</a> */}
                              <a href="#" class="btn btn-primary btn2">2999 hour payback</a>
                              <button onClick={()=>{dispatch(addcart(value))}}  className="btn bg-dark text-light btn1">ADD TO CART</button>
                            </div>
                          </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
