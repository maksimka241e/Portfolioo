import { About } from '../components/About/AboutMain'
import { Header } from '../components/Common/Header/Header'
import { HomeMain } from '../components/Home/HomeMain'
import { Icons } from '../components/Icons/Icons'
import { Projects } from '../components/Projects/ProjectsMain'
import { Skills } from '../components/Skills/Skills'

export function Home() {
  // переделать код и сделать более качественее
  return (
    <div className='Home'>
      <Header />
      <HomeMain />
      <About />
      <Skills />
      <Projects />
      <Icons />
    </div>
  )
}
