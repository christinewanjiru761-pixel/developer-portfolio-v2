import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
function Nav() {
  const [activeNav, setAciveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setAciveNav("#")} className={activeNav ==='#' ? 'active': '' }><AiOutlineHome /></a>
      <a href='#about' onClick={() => setAciveNav('#about')} className={activeNav === '#about' ? 'active': ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setAciveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBook /></a>
      <a href='#services' onClick={() => setAciveNav('#services')} className={activeNav === '#services' ? 'active': ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setAciveNav('#contact')}  className={activeNav === '#contact' ? 'active': ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav