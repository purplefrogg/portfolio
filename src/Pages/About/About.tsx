import React from 'react'
import style from './About.module.scss'

export const About = () => {
  const techStack = [
    'reactjs',
    'redux',
    'sass',
    'nextjs',

    'javascript',
    'typeScript',
  ]
  return (
    <div id='About' className={style.About}>
      <div className='content_conteiner'>
        <div className='title'>ABOUT ME</div>
        <div className={style.content_wrap}>
          <div className={style.description}>
            <p>
              Я начинающий фронт-енд разработчик, а также хочу стать
              профессионалом в своем деле. Чем я занимаюсь? Я пишу код. Мне
              нравиться писать код, решать проблемы, делать красивый UI дизайн,
              создавать что-то новое и интересное. Активно учусь новому. Думаю,
              что учить новое и постоянно развиваться одна из важнейших аспектов
              жизни, которая делает человека счастливым. <br /> Я открытый(open
              mind), творческий, целеустремленный человек. Пытаюсь развивать
              софт скилы, а также тех скилы.
            </p>
          </div>
          <div className={style.techstack}>
            {techStack.map((item, index) => (
              <div key={index} className={style.techstack_item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
