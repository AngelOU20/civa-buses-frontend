import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
 }
 
html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */

//998px
@media (max-width:${({ theme }) => theme.media.tab}) {
  .container{
    padding: 0 3.2rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {
  html{
    font-size: 50%;
  }

  .grid{
    gap: 3.2rem;
  }

  .grid-two-column, .grid-three-column, .grid-four-column{
    grid-template-columns: 1fr;
  }
}

`;
