import React from 'react'
import './Menu.scss';
import { Link } from 'gatsby';
import SocialMedia from '../SocialMedia/SocialMedia';
import Courses from '../Courses/Courses';
import Footer from '../Footer';

const Menu = () => {
  return (
    <header className='container__menu'>
      <Link to='/'>
        <h2 className='container__menu-link'>Blog para desarrolladores</h2>
      </Link>

      <p className='container__menu-description'>
        Este es un blog que contiene articulos sobre nuevas funcionalidades y actualizaciones en diferentes frameworks y lenguajes de programación. A su vez contiene una serie de cursos que serviran para fortalecer e incrementar tus conocimientos.
      </p>

      <SocialMedia />
      <Courses />
      <Footer />
    </header>

  )
}

export default Menu
