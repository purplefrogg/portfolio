import React from "react"
import { useInView } from "react-intersection-observer"
import { useSelector } from "react-redux"
import { githubIcon, linkIcon } from "../assets"
const Projects = () => {
  const projects = useSelector((state) => state.App.projects)

  return (
    <div id='Projects' className='Projects'>
      <div className='content_conteiner'>
        <div className='Projects_title'>MY RECENT WORK</div>
        <div className='ProjectsGrid'>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              website={project.website}
              image={project.image}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

const ProjectItem = ({ image, website, githubUrl }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  })

  return (
    <div
      ref={ref}
      className={inView ? "Projects_item inView" : " Projects_item"}
    >
      <img alt='' className='Project_image' src={image} />
      <a
        className='Project_Link'
        rel='noreferrer'
        target='_blank'
        href={website}
      >
        <img alt='icon' src={linkIcon} />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        className='Project_Link github'
        href={githubUrl}
      >
        <img alt='icon' src={githubIcon} />
      </a>
    </div>
  )
}
