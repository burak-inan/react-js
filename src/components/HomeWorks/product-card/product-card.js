import React from 'react'
import { Card } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'; 
import "./product-card.scss";

const ProductCard = ({title,image,price,discountFrom,rate,stars}) => {
  const imageeUrl = require(`../../../assets/images/${image}`);

  return (
    <Card className='card position-relative'>
      {
        rate && <div className='discountRate position-absolute bg-success rounded-3 text-center'>{rate}</div>
      }
      <Card.Img src={imageeUrl}/>

      <Card.Body className='text-center'>
        
        <Card.Title><div>{[...Array(stars)].map((e, i) => <span className="busterCards" key={i}> <FaStar/> </span>)}</div></Card.Title>
        <Card.Text>{title}</Card.Text>
        <p>
          {
            discountFrom &&
              <span className='text-decoration-line-through'>{discountFrom}</span>
          }
          <span>{price}</span>
        </p>
      </Card.Body>
    </Card>
  )
}

export default ProductCard