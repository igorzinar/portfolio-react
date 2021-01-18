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
        Any Questions ? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start">
          <div className="answer">
            <p>We start from </p>
            <p>Analyse the market and find solution </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>We start from </p>
            <p>Analyse the market and find solution </p>
          </div>
        </Toggle>
        <Toggle title="Deferent Pay Methods">
          <div className="answer">
            <p>We start from </p>
            <p>Analyse the market and find solution </p>
          </div>
        </Toggle>
        <Toggle title="What Product do you offer.">
          <div className="answer">
            <p>We start from </p>
            <p>Analyse the market and find solution </p>
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
