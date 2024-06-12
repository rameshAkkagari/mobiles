import React from 'react'
import './Card.css';


function Card({cartItems,handlerAddProduct,handlerRemoveproduct ,emptyCart,orderProducts}) {


    const totalPrice = cartItems.reduce((price,item)=>price + item.quantity * item.price,0)

	
  return (
    <div className='cart-items'>
        <h2 className='cart-items-header'> Cart Items  </h2>

        <div className='clear-cart'>
           {cartItems.length >=1 && (
            <button className='clear-cart-button' onClick={emptyCart}>Clear Cart</button>
           )}
        </div>

        {cartItems.length === 0 && <div className='cart-items-empty'>No items are added.</div>}


        <div>

            {cartItems.map((item)=>{
              return(
                <div key={item.id} className='cart-item-list'>
                  <img src={item.image} className='cart-items-iamge'/>

                  <div className='cart-item-name'>{item.name}</div>
                  <div className='cart-item-function'>
                        <button className='cart-item-add' onClick={()=>handlerAddProduct(item)}>+</button>
                        <button className='cart-item-remove' onClick={()=>handlerRemoveproduct(item)}>-</button>
                  </div>
                  <div className='cart-items-price'>
                    {item.quantity}  X ${item.price}
                  </div>
                </div>
              )
            })}
        </div>

        <div className='cart-item-total-price-name'>
              Total price
              <div className='cart-item-total-price'>${totalPrice}</div>
			 <div>
			{cartItems.length >=1 && <button className='clear-cart-button' onClick={orderProducts}>Order</button>}
			 </div>
        </div>
    </div>
  )
}

export default Card