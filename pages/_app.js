import React from 'react'
import App from 'next/app'
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

MyApp.getInitialProps = async (appContext) => {
   appContext.ctx.reduxStore = store
   const pageProps = await App.getInitialProps(appContext)
   return { ...pageProps, }
}

export default MyApp