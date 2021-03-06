import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/* 
font-family: 'Inter', sans-serif;
font-family: 'Lobster', cursive; */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html {
    @media (max-width: 1600px) {
        font-size: 80%;
    }
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
 
 

button {
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding:1rem 2rem;
    border: 3px solid #23d997;
    background:transparent;
    color:wite;
    transition: all 1s ease;
    font-family: 'Inter', sans-serif;
    
    &:hover {
        background-color:#23d997;
        color:white;
    }
}
  
  
    h2 {
        font-weight:lighter;
        font-size:4rem;
    }
    h3 {
        color:white;
    }
    h4 {
        font-weight:bold;
        
    }

    span {
        font-weight:bold;
        color:#23d997;
    }
     
     a { 
         font-size:1.5rem;
     }

    p {
        padding: 3rem 0;
        color:#ccc;
        font-size: 1.4rem;
        line-height:150%;
    }
    font-size:1.4rem;


`
export default GlobalStyle
