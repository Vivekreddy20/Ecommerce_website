import React from 'react'
import './cart.css';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { removeFromCart } from '../redux/slice/cartSystem';
const Cart = (props) => {
  const dispatch=useDispatch();
  const seven=useSelector(state=>state);
  console.log("hi:",seven.cart);
  return (
    <div>
      {props.stu ? (
        <>
          <center>
            <h1>Quantity: {seven.cart.quantity}</h1>
          </center>
          {seven.cart.cart.map((e, index) => (
            <div className="who" key={index}>
              <img src={e.image} alt="product" />
              <div className="whoo">
                <li>{e.title}</li>
                <li>{e.price}</li>
                <Link to={`/Prodetails/${e.title}`}>
                  <button>Buy Now</button>
                </Link>
                <button onClick={() => dispatch(removeFromCart(e))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p style={{background:"red"}}>Cannot order because you are a student.</p>
      )}
    </div>
  )
}

export default Cart
