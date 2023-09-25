import React from 'react'
import "./common-style.css";
import "./header.scss";

const Header = () => {
  return (
    <div>
      <nav class='display-flex'>
        <div>Logo</div>
        <ul class='display-flex list-s-n'>
          <li className='btn-effect'>Product</li>
          <li className='btn-effect'>Download</li>
          <li className='btn-effect'>Contact Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header