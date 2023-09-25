import React from 'react'
import ProductCard from './product-card'

const ProductCards = () => {
  return (
    <div className='d-flex gap-5 m-5 cards'>
      <ProductCard title="MEN'S SHIRT" image="card1.webp" price="$65.80" discountFrom="$85.00" rate="-10%" stars={4}/>
      <ProductCard title="WOMEN'S SHIRT" image="card2.webp" price="$65.80" discountFrom="" rate="" stars={3}/>
    </div>
  )
}

export default ProductCards