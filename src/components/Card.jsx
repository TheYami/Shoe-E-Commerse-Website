import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";
import '../products/products.css'

function Card({img,title,reviews,color,company,newPrice,prevPrice,star}) {
  return (
    <section className="card">
    <img src={img} alt={title} className='card-img'/>

    <div className="card-detail">
      <h3 className='card-title'>{title}</h3>

      <section className="card-reveiws">
        {star}{star}{star}{star}
        <span className='total-reviews'>{reviews}</span>
      </section>

      <section className="card-price">
        <div className="price">
          <del>{prevPrice}</del>{newPrice}
        </div>

        <div className='bag'>
          <IoBagAdd className='bag-icon'/>
        </div>
      </section>
    </div>
  </section>
  )
}

export default Card