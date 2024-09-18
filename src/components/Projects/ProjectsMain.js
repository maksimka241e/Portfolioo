import { DataProjects } from './data'
import './ProjectsStyles.css'
export function Projects() {
  function DetailedProject(id) {
    console.log(id)
  }
  return (
    <div className='Projects'>
      <h2 className='Projects__title'>Проекты</h2>
      <article className='Projects__item'>
        {DataProjects.map((item, index) => (
          <div className='Projects__item__block' key={index}>
            <img src={item.img} alt={item.title} className='Projects__item__block__img' />
            <div className='Projects__item__block__below-block'>
              <h3 className='Projects__item__block__below-block__title'>{item.title}</h3>
              <p className='Projects__item__block__below-block__text'>{item.text}</p>
              <p className='Projects__item__block__below-block__skils'>{item.skills}</p>
              <button className='Projects__item__block__below-block__btn' onClick={() => DetailedProject(index)}>
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </article>
    </div>
  )
}
