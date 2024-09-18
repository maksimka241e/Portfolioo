import { useRef } from 'react'

import { About } from '../components/About/AboutMain'
import { Header } from '../components/Common/Header/Header'
import { HomeMain } from '../components/Home/HomeMain'
import { Projects } from '../components/Projects/ProjectsMain'
import { Skills } from '../components/Skills/Skills'

export function Home({ scroollToBlock1, scroollToBlock2, scroollToBlock3 }) {
  const myHomeBlock = useRef(null)
  const myAboutBlock = useRef(null)

  function scrollToBlock() {
    if (myHomeBlock.current) {
      myHomeBlock.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  function scrollToBlock1() {
    if (myAboutBlock.current) {
      myAboutBlock.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  // переделать код и сделать более качественее
  return (
    <div className='Home'>
      {/* <Header /> */}
      <HomeMain item={myHomeBlock} />
      <About item={myAboutBlock} />
      <Skills />
      <Projects />
    </div>
  )
}
