import React from 'react'
import Head from 'next/head'
import { css, cx } from '@emotion/css'
import LayoutAuth from '../containers/layoutAuth'
import { InputEmail, InputPassword, Button} from '../components'

export default function Login() {
   const handleSubmit = (event) => {
      if (event) event.preventDefault()
      console.log('handleSubmit')
   }

   return (
      <>
         <Head>
            <title>ورود</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <LayoutAuth>
            <form onSubmit={handleSubmit}>
               <InputEmail placeholder='email | ایمیل'/>
               <InputPassword placeholder='password | رمز عبور' />
               <Button type='submit'>ارسال</Button>
            </form>
         </LayoutAuth>
      </>
   )
}
