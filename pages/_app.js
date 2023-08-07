import React from 'react'
import theme from '../configs/theme'
import store from '../configs/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'

const MyApp = ({ Component, pageProps }) => {
   return(
      <Provider store={store}>
         <ThemeProvider theme={theme}>
            <Component {...pageProps} />
         </ThemeProvider>
      </Provider>
   ) 
}

export default MyApp