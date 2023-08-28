import React from 'react'
import App from 'next/app'
import theme from '../configs/theme'
import { Provider } from 'react-redux'
import Cookies from 'universal-cookie'
import createMyStore from '../configs/store'
import { ThemeProvider } from '@emotion/react'
import windowHandler from '../utils/windowsHandler'
import { LOGOUT_ACTION, VERIFY_USER_ACTION } from '../actions'

const store = createMyStore()

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
   let cookies = { }
   if (appContext.ctx.req){
      cookies = new Cookies(appContext.ctx.req.headers.cookie)
   }
   else{
      cookies = new Cookies()
   }
   windowHandler.cookies = cookies
   if( !(cookies.get('email')) && cookies.get('user-id') && cookies.get('logged') ){
      if( appContext.ctx.res ){
         const emailCookie = 'email='
         appContext.ctx.res.setHeader('set-cookie',`${emailCookie}`)
         const userIdCookie = 'user-id='
         appContext.ctx.res.setHeader('set-cookie',`${userIdCookie}`)
         const loggedCookie = 'logged=false'
         appContext.ctx.res.setHeader('set-cookie',`${loggedCookie}`)
      }
      await store.dispatch(LOGOUT_ACTION())
   }
   else if( cookies.get('user-id') && cookies.get('user-id') != '' ){
      await store.dispatch(VERIFY_USER_ACTION(cookies.get('user-id')))
      const { auth } = await store.getState()
      const { email } = auth.user
      if( appContext.ctx.res ){
         const emailCookie = `email=${email}` 
         appContext.ctx.res.setHeader('set-cookie',`${emailCookie}`)
         const loggedCookie = `logged=${auth.logged}` 
         appContext.ctx.res.setHeader('set-cookie',`${loggedCookie}`)
      }
      else{
         if( !(cookies.get('email')) ){
            cookies.set('email',email, { path: '/' })
         }
         if( !(cookies.get('logged')) ){
            cookies.set('logged',auth.logged,{ path: '/' })
         }
      }
   }
   else{
      if( appContext.ctx.res ){
         const emailCookie = 'email='
         appContext.ctx.res.setHeader('set-cookie',`${emailCookie}`)
         const userIdCookie = 'user-id='
         appContext.ctx.res.setHeader('set-cookie',`${userIdCookie}`)
         const loggedCookie = 'logged=false'
         appContext.ctx.res.setHeader('set-cookie',`${loggedCookie}`)
         await store.dispatch(LOGOUT_ACTION())
      }
   }
   const pageProps = await App.getInitialProps(appContext)
   return { ...pageProps }
}

export default MyApp