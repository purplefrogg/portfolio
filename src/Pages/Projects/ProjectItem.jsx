import { githubIcon, linkIcon } from "../../assets"
import { useInView } from "react-intersection-observer"
import style from "./Projects.module.scss"

export const ProjectItem = ({ image, website, githubUrl }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  })

  return (
    <div
      ref={ref}
      className={
        inView ? style.Projects_item + " " + style.inView : style.Projects_item
      }
    >
      <img alt='' className={style.Project_image} src={image} />
      <a
        className={style.Project_Link}
        rel='noreferrer'
        target='_blank'
        href={website}
      >
        <img alt='icon' src={linkIcon} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        className={style.Project_Link + " " + style.github}
        href={githubUrl}
      >
        <img alt='icon' src={githubIcon} />
      </a>
    </div>
  )
}
