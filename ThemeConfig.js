import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: "linear-gradient(360deg, rgba(25,22,41,1) 0%, rgba(10,10,17,1) 50%)",
  text: '#FAFAFA',
  background: "linear-gradient(360deg, rgba(25,22,41,1) 0%, rgba(10,10,17,1) 50%)"
  // background: ""
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`