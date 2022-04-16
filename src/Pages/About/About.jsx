import React from "react"
import style from "./About.module.scss"

export const About = () => {
  const techStack = [
    "reactjs",
    "redux",
    "sass",
    "nextjs",
    "front-end",
    "UI/UX disign",
    "HTML5",
    "javascript",
    "typeScript",
    "animation",
    "git",
    "linux",
  ]
  return (
    <div id='About' className={style.About}>
      <div className='content_conteiner'>
        <div className='title'>ABOUT ME</div>
        <div className={style.content_wrap}>
          <div className={style.description}>
            <p>
              Чем я занимаюсь? В первую очередь я пишу код. Мне интересно писать
              код, решать проблемы, делать красивые вещи, создавать что-то новое
              и интересное. И когда что-то получается, чувствую себя гением, а
              когда делаю красоту то человеком искусства. Но не единым кодом я
              живу. Также занимаюсь бодибилдингом, иногда музыкой. Занимался
              трейдингом, рисованием, 3D-моделированием, пытался в геймдев.
              Активно учусь новому. Думаю, что учить новое и постоянно
              развиваться одна из важнейших аспектов жизни, которая делает
              человека счастливым. <br /> Я открытый(open mind), творческий,
              любопытный человек. Пытаюсь развивать софт скилы, а также тех
              скилы. любимые фразы: "Easy come, easy go", "No pain, no gain",
              "don't work hard work smart", "Под лежачий камень вода не течёт".
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
