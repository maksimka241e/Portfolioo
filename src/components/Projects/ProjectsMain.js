import { DataProjects } from './data'
import './ProjectsStyles.css'
export function Projects() {
  return (
    <div className='Projects' id='Projects'>
      <h2 className='Projects__title'>Проекты</h2>
      <article className='Projects__item'>
        {DataProjects.map((item, index) => (
          <div className='Projects__item__block' key={index}>
            <a href={item.url} target='_blank' rel='noreferrer'>
              <img src={item.img} alt={item.title} className='Projects__item__block__img' />
            </a>
            <div className='Projects__item__block__below-block'>
              <h3 className='Projects__item__block__below-block__title'>{item.title}</h3>
              <p className='Projects__item__block__below-block__text'>{item.text}</p>
              <p className='Projects__item__block__below-block__skils'>{item.skills}</p>
              <a href={item.url} target='_blank' rel='noreferrer'>
                <button className='Projects__item__block__below-block__btn'>Подробнее</button>
              </a>
            </div>
          </div>
        ))}
      </article>
    </div>
  )
}
