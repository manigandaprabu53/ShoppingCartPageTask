import React, { useContext, useState } from 'react'
import ProductCard from './ProductCard'
import { Products } from './CardContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cards() {
  let val = 0;
    let list = useContext(Products);
    let qty = 0;
    let [total, setTotal] = useState([
      {
        id: 1,
        subtotal: 0
      },
      {
        id: 2,
        subtotal: 0
      },
      {
        id: 3,
        subtotal: 0
      },
      {
        id: 4,
        subtotal: 0
      },
      {
        id: 5,
        subtotal: 0
      },
      {
        id: 6,
        subtotal: 0
      },
      {
        id: 7,
        subtotal: 0
      },
      {
        id: 8,
        subtotal: 0
      },
      {
        id: 9,
        subtotal: 0
      },
      {
        id: 10,
        subtotal: 0
      }
    ])
    let final = ()=>{
      
      total.forEach((e)=>{
        val = val + Number(e.subtotal)
      })
      return val;
    }

    let productQuantity = (total)=>{
      console.log(total);
      total.forEach((e)=>{
        if(e.subtotal > 0)
        {
          qty+=1;
        }
      })
      return qty;
    }

    function reload(){
      location.reload();
    }
    
  return <div className='d-flex justify-content-around'>
    <div className="container" style={{width: "65%"}}>
        {
           list.map((e, i)=>{
            return <ProductCard data={e} key={i} total={total} setTotal={setTotal}/>
           })
        }
    </div>
    <div className='m-2' style={{width: "35%", height: "40px"}}>
      <Card>
        <Card.Header><h4>Cart</h4></Card.Header>
        <Card.Body>
          
            <h5 className='mb-3'>Number of Products: {productQuantity(total)}</h5>
            <h5 className='mb-3'>Total:{final()}</h5> 
          
          <Button variant="primary" onClick={reload}>Reset Cart</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
}

export default Cards