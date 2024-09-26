import { SkillsIcons } from './data'
import './SkillsStyles.css'
export function Skills() {
  return (
    <div className='Skills' id='Skills'>
      <h2 className='Skills__title'>Skills</h2>
      <article className='Skills__item'>
        {SkillsIcons.map((item) => (
          <div className={`Skills__item__block ${item.blockClass}`}>
            <img className='Skills__item__block__icons' src={item.url} alt={item.alt} />
            <p className='Skills__item__block__text'>{item.title}</p>
          </div>
        ))}
      </article>
    </div>
  )
}
