import '../styles/globals.scss'
import { ThemeProvider } from "styled-components"
import { useState } from 'react'
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme == 'dark'? setTheme('light') : setTheme('dark');
  }

  return (
    <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles/>
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
}
