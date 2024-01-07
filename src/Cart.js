import React from 'react'
import { useSelector } from 'react-redux'
import { removewatches } from './slice'
import { useDispatch } from 'react-redux'


export default function Cart() {
    
    const dispatch=useDispatch()
    const finaldata = useSelector((state) => state.mycart)

    return (
        <div id='cart' style={{ marginTop: "100px" }}>
            <table class="table" style={{width:"90%",margin:"auto"}}>
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Product</th>
                                    <th></th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
            {
                finaldata.map((value, index) => {
                    return (
                        
                            <tbody>
                                <tr>
                                    <th><img src={value.image} className='img-fluid' style={{ height: "100px", width: "100px" }}/>
                                    </th>
                                    <td>{value.info}</td>
                                    
                                    <td>{value.id}</td>
                                    <td>{value.price}</td></tr>
                                    <td><button onClick={()=>dispatch(removewatches(value))}>remove</button></td>
                               
                            </tbody>
                       
                    )
                })
            }
            </table>

        </div>
    )
}
