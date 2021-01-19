import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll'
import { scrollReveal } from '../animation'

function FaqSection() {
  const [element, controls] = useScroll()
  return (
    <Faq
      ref={element}
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
    >
      <h2>
        Let me tell you a few <span>things...</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Interests">
          <div className="answer">
            <p>I just love to code !!! </p>
            <p>
              {/* Every time when star a new project I think to add some new */}
              technology{' '}
            </p>
          </div>
        </Toggle>
        <Toggle title="What Prefer">
          <div className="answer">
            <p>🌱 I’m currently learning everything 🤣 </p>
            <p>
              {/* It's so exited when you open some features in known technology{' '} */}
            </p>
          </div>
        </Toggle>
        <Toggle title="Looking for...">
          <div className="answer">
            <p>👯 I’m looking to collaborate with other frontend developers </p>
            <p></p>
          </div>
        </Toggle>
        <Toggle title="Goals">
          <div className="answer">
            <p> </p>
            <p>🥅 2021 Goals: Contribute more to Open Source projects </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem;
    }
  }
`
export default FaqSection
