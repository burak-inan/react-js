import React from 'react'

const Events1 = () => {

    const sayHello = () => {
        alert("Hello")
         }

  return (
    <div>
        <div onClick={sayHello} >Say Hello</div>
    </div>
  )
}

export default Events1