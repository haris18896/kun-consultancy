import { Fragment } from 'react'
import ProjectItem from './project-item'

function ProjectsGrid(props) {
  const { services } = props

  return (
    <Fragment>
      {services.map(project => (
        <ProjectItem key={project.slug} project={project} />
      ))}
    </Fragment>
  )
}

export default ProjectsGrid
