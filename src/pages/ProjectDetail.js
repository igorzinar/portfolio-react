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
    setProject(currentProject)
  }, [projects, url])
  return (
    <div>
      <h1>Project Detail!!!!!!!!!!!!!!!!!</h1>
    </div>
  )
}

export default ProjectDetail
