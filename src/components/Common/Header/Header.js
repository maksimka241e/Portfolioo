import { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import './HeaderStyles.css'

export function Header() {
  const menuRef = useRef()
  const [OpenMenu, SetOpenMenu] = useState(false)
  return (
    <header className='Header'>
      <article className='Header__article'>
        <Link className='Header__article__link'>
          <h3 className='Header__article__link__text'>Обо мне</h3>
        </Link>
        <Link className='Header__article__link'>
          <h3 className='Header__article__link__text'>Главная</h3>
        </Link>
        <Link className='Header__article__link'>
          <h3 className='Header__article__link__text'>Скиллы</h3>
        </Link>
        <Link className='Header__article__link'>
          <h3 className='Header__article__link__text'>Проекты</h3>
        </Link>
        <Link className='Header__article__link' to={'/donat'}>
          <h3 className='Header__article__link__text donates'>Поддержка автора</h3>
        </Link>
      </article>
      {/* <article className='Header__article1'>
        <button className='Header__article__button--open-menu'>
          <span>=</span> Меню
        </button>
      </article> */}
      <Outlet />
    </header>
  )
}
