import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *:before,
  *:after  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {

--white: #FFFFFF;
--cyan: #2D5676;
--blue: #2988B5;
--bege: #F7F7F7;
--ice: #EBF6FA;
--light-gray: #CCCCCC;
--medium-gray: #666666;
--medium-gray-second: #707070;
--dark-gray: #333333;
--red: #E2173D;

}

html {
  scroll-behavior: smooth;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
@media (min-width: 2560px) {
  html {
    font-size: 120%;
  }
}
@media (min-width: 2880px) {
  html {
    font-size: 140%;
  }
}



body,
input,
textarea,
select,
button {
  font: 400 1rem 'Roboto', sans-serif;
}

body {
  
  background: var(--white);
  color: var(--medium-gray);
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  
  li{
    padding: 0;
    margin: 0;
  }
}
`;
