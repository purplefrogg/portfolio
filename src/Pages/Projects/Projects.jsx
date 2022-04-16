import React from "react"
import { useSelector } from "react-redux"
import { ProjectItem } from "./ProjectItem"
import style from "./Projects.module.scss"
export const Projects = () => {
  const projects = useSelector((state) => state.App.projects)

  return (
    <div id='Projects' className={style.Projects}>
      <div className={style.content_conteiner}>
        <div className={style.title}>MY RECENT WORK</div>
        <div className={style.ProjectsGrid}>
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
