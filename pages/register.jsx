import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import LayoutAuth from '../containers/LayoutAuth'
import FormControl from '../containers/FormControl'
import { InputText, InputEmail, InputPassword, Button, H2, Hyperlink } from '../components'

export default function Register() {
   const router = useRouter()
   const [formValue,setFormValue] = useState({})

   const handleSubmit = (event) => {
      if (event) event.preventDefault()
      console.log('handleSubmit',formValue)
      router.push('/login')
   }

   const handleOnChange = (name,value) => {
      setFormValue({
         ...formValue,
         [name]: value,
      })
   }

   return (
      <>
         <Head>
            <title>ثبت نام</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <LayoutAuth>
            <H2>لطفا در ریموت جابب ثبت نام کنید</H2>
            <form onSubmit={handleSubmit}>
               <FormControl>
                  <InputText onChange={(value) => handleOnChange('name',value)} placeholder='نام و نام خانوادگی' />
               </FormControl>
               <FormControl>
                  <InputEmail onChange={(value) => handleOnChange('email',value)} placeholder='ایمیل'/>
               </FormControl>
               <FormControl>
                  <InputPassword onChange={(value) => handleOnChange('password',value)} placeholder='رمز عبور' />
               </FormControl>
               <FormControl>
                  <Button type='submit'>ثبت نام</Button>
               </FormControl>
               <Hyperlink href='/login' text='قبلا ثبت نام کرده اید؟'>وارد شوید</Hyperlink>
            </form>
         </LayoutAuth>
      </>
   )
}
