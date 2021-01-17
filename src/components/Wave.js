import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Wave = () => {
  return (
    <div>
      <WaveSvg
        viewBox="0 0 1440 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.5 }}
          d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
          stroke=" #23d997"
          strokeOpacity="0.2"
          strokeWidth="10"
        />
      </WaveSvg>
      <WaveSvg
        viewBox="0 0 1111 278"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.5 }}
          d="M1 91.9638C177.315 494.416 953.651 134.748 1110 1"
          stroke=" #23d997"
          strokeOpacity="0.2"
          strokeWidth="10"
        />
      </WaveSvg>
    </div>
  )
}
const WaveSvg = styled.svg`
  position: absolute;
  left: 0;

  z-index: 1;
`

export default Wave
