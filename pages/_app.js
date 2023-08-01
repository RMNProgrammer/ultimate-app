import theme from '../configs/theme'
import { ThemeProvider } from '@emotion/react'

const MyApp = ({ Component, pageProps }) => {
   return(
      <ThemeProvider theme={theme}>
         <Component {...pageProps} />
      </ThemeProvider>
   ) 
}

export default MyApp