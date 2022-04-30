import { githubIcon, linkIcon } from '../../assets'
import { useInView } from 'react-intersection-observer'
import style from './Projects.module.scss'

interface projectItemsProps {
  image: string
  website: string
  githubUrl: string
}

export const ProjectItem = ({
  image,
  website,
  githubUrl,
}: projectItemsProps) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  })

  return (
    <div
      ref={ref}
      className={
        inView ? style.Projects_item + ' ' + style.inView : style.Projects_item
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
        <span>website</span>
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        className={style.Project_Link + ' ' + style.github}
        href={githubUrl}
      >
        <img alt='icon' src={githubIcon} /> <span>github</span>
      </a>
    </div>
  )
}
