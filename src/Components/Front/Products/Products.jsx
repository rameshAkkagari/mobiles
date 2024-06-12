import React from 'react'
import './Products.css';
function Products({ProductItems,handlerAddProduct}) {
    // console.log(ProductItems);
  return (
    <div className='products'>
        {ProductItems.map((item)=>(
            <div className='card' key={item.id}>
                <div>
                        <img className='product-image'
                                src={item.image}
                                alt={item.name}
                        />
                       
                </div>

                <div>
                    <h3 className='product-name'>{item.name}</h3>
                </div>
                <div className='product-price'> ${item.price}
                </div>
                <div>
                    <button className='product-add-button' onClick={ ()=>handlerAddProduct(item)}>Add to cart</button>
                </div>
            </div>

           
            
        ))}
    </div>
  )
}

export default Products