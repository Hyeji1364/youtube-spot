import React from 'react'
import { SiYoutubegaming } from 'react-icons/si';

const Logo = () => {
  return (
    <h1 className='header__logo'>
      <a href='/'>
        <em><SiYoutubegaming /></em>
        <span>Attraction<br /><i>youtube</i></span>
      </a>
    </h1>
  )
}

export default Logo