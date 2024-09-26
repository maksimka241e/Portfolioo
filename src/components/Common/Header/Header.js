import { useContext, useEffect, useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link, Outlet } from 'react-router-dom'

import './HeaderStyles.css'

export function Header() {
  const menuRef = useRef(null)
  const [OpenMenu, SetOpenMenu] = useState(false)
  const handleToggleMenu = () => {
    SetOpenMenu(!OpenMenu)
  }
  // адаптивное меню
  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current && menuRef.current.offsetWidth < 769) {
        SetOpenMenu(false)
      } else {
        SetOpenMenu(true)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className='Header' ref={menuRef}>
      <article className={`Header__article ${OpenMenu === true ? 'active' : ''}`}>
        <AnchorLink className='Header__article__link' href='#Home'>
          <h3 className='Header__article__link__text'>Главная</h3>
        </AnchorLink>
        <AnchorLink className='Header__article__link' href='#About'>
          <h3 className='Header__article__link__text'>Обо мне</h3>
        </AnchorLink>
        <AnchorLink className='Header__article__link' href='#Skills'>
          <h3 className='Header__article__link__text'>Скиллы</h3>
        </AnchorLink>
        <AnchorLink className='Header__article__link' href='#Projects'>
          <h3 className='Header__article__link__text donates'>Проекты</h3>
        </AnchorLink>
      </article>
      <article className='Header__article1' onClick={() => handleToggleMenu()}>
        <button className='Header__article__button--open-menu'>
          <span className={`${OpenMenu === true ? 'spanes' : 'span1'}`}>{OpenMenu === true ? 'х' : '='}</span> Меню
        </button>
      </article>
      <Outlet />
    </header>
  )
}
