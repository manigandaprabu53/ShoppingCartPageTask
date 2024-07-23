import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { findIndex } from './helper';

function ProductCard({data, total, setTotal}) {
  let [subtot, setSubtot] = useState(0);
  let [toogle, setToogle] = useState(true);
  
  function handleCart(){
    let index = findIndex(total, data.id);
    let finprice = subtot*data.price;
    let fin = {id: Number(total[index].id), subtotal: finprice}
    total.splice(index, 1, fin);
    setTotal([...total])
    console.log(total)
    setToogle(false);
  }
  function removeCart(){
    let index = findIndex(total, data.id);
    let finprice = 0;
    let fin = {id: Number(total[index].id), subtotal: finprice}
    total.splice(index, 1, fin);
    setSubtot(0)
    setTotal([...total])
    setToogle(true);
  }
  
  return <>
    <div className="row mt-1">
        <div className='d-flex justify-content-start gap-3 align-items-center border border-secondary'>
            <img src={data.image} alt="Image Not Found" style={{height: "auto", width: "200px"}}/>
            <div style={{width: "400px"}} className='ml-3 p-4'>
                <h3>{data.title}</h3>
                <h6>Category: {data.category}</h6>
                <p>{data.description}</p>  
            </div>
            <div>
              <div className='d-flex gap-2 align-items-start'>
                <select onChange={(e)=>setSubtot(e.target.value)}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <h4>${data.price}</h4>
              </div>
              <div className='mt-5'>
                {/* <Button variant='primary' onClick={()=>{handleCart()}}>Add to Cart</Button> */}
                {
                  toogle?<Button variant='primary' onClick={()=>{handleCart()}}>Add to Cart</Button>:<Button variant='primary' onClick={()=>{removeCart()}}>Remove From Cart</Button>
                }
              </div>
              <div className='mt-3'>
                <h5>SubTotal: ${subtot*data.price}</h5>
              </div>
            </div>
        </div>
    </div>
  </>
}

export default ProductCard