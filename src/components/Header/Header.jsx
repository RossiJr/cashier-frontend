import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'

import style from './Header.module.css';

export const Header = ({ openSideBar }) => {
  return (
    <header className={style.header}>
      <div className={style.menuIcon}>
        <BsJustify className={style.icon} onClick={openSideBar}/>
      </div>
      <div className={style.headerLeft}>
        <BsSearch className={style.icon}/>
      </div>
      <div className={style.headerRight}>
        <BsFillBellFill className={style.icon}/>
        <BsFillEnvelopeFill className={style.icon}/>
        <BsPersonCircle className={style.icon}/>
      </div>
    </header>
  )
};

export default Header;