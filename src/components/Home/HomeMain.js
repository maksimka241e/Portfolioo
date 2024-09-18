import './HomeStyles.css'
export function HomeMain({ item }) {
  return (
    <main className='Home__main' ref={item}>
      <article className='Home__main__article'>
        <img src='https://i.postimg.cc/fbbFrJWZ/img.jpg' className='Home__main__article__img' alt='ImagePeople' />
      </article>
      <article className='Home__main__article1'>
        <h1 className='Home__main__article__title'>Frontend developer</h1>
      </article>
    </main>
  )
}
