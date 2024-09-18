import './AboutStyles.css'

export function About({ item }) {
  return (
    <div className='About' ref={item} id='AboutBlock'>
      <h2 className='About__title'>Обо мне</h2>
      <article className='About__item'>
        <div className='About__item__block'>
          <p className='About__item__block__text'>Меня зовут Максим, и я уже два года изучаю frontend-разработку.</p>
        </div>
        <div className='About__item__block1'>
          <p className='About__item__block__text'>
            Я довольно активен в Telegram и на GitHub, где делюсь идеями и материалами по программированию, технологиям
            и другим темам.
          </p>
        </div>
        <div className='About__item__block2'>
          <p className='About__item__block__text anim'>
            Cлушаю веб-стандарты, смотрю лекции ШРИ Яндекса, читаю статьи на Habr
          </p>
        </div>
      </article>
    </div>
  )
}
