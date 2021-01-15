import React from 'react'
// Global Style
import GlobalStyle from './components/GlobalStyle'
// Import Pages
import AboutMe from './pages/AboutMe'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
// Router
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {' '}
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>{' '}
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>{' '}
      </Switch>
    </div>
  )
}

export default App
