import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ProjectState } from '../ProjectState'

const ProjectDetail = () => {
  const history = useHistory()
  const url = history.location.pathname

  // useState
  const [projects, setProjects] = useState(ProjectState)
  const [project, setProject] = useState(null)

  // useEffect

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    )
    setProject(currentProject[0])
    console.log(project)
  }, [projects, url])
  return (
    <>
      {project && (
        <Details>
          <HeadLine>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="" />
          </HeadLine>
        </Details>
      )}
    </>
  )
}

const Details = styled.div``
const HeadLine = styled.div``
export default ProjectDetail
