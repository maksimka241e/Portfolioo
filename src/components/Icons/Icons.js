import './Icons.css'
export function Icons() {
  return (
    <div className='Icons'>
      <article className='Icons__item1'>
        <a target='_blank' href='https://t.me/MaksimKaize' rel='noreferrer'>
          <img
            src='https://cdn-icons-png.freepik.com/128/3536/3536661.png'
            className='Icons__item1__img'
            alt='telegramm'
          />
        </a>
      </article>
      <article className='Icons__item2'>
        <a target='_blank' href='https://github.com/maksimka241e/' rel='noreferrer'>
          <img
            src='https://cdn-icons-png.freepik.com/128/3291/3291695.png'
            className='Icons__item1__img'
            alt='github'
          />
        </a>
      </article>
      <article className='Icons__item3'>
        <a target='_blank' href='mailto:maksimoksx@gmail.com' rel='noreferrer'>
          <img
            src='https://cdn-icons-png.freepik.com/128/9734/9734608.png'
            className='Icons__item1__img'
            alt='mail.ru'
          />
        </a>
      </article>
    </div>
  )
}
