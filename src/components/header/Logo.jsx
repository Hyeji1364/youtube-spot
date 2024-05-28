import React from 'react'
import { MdFoodBank } from "react-icons/md";

const Logo = () => {
  return (
    <h1 className='header__logo'>
      <a href='/'>
        <em><MdFoodBank /></em>
        <span>popular spot<br /><i>youtube</i></span>
      </a>
    </h1>
  )
}

export default Logo