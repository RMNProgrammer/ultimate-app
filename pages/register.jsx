import Head from 'next/head'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import LayoutAuth from '../containers/LayoutAuth'
import FormControl from '../containers/FormControl'
import { useDispatch, useSelector } from 'react-redux'
import { REGISTER_ACTION, REGISTER_INFO_ACTION } from '../actions'
import { InputText, InputEmail, InputPassword, Button, H2, Hyperlink, Alert } from '../components'

const Register = ({ users }) => {
   let registered = false
   const router = useRouter()
   const dispatch = useDispatch()
   const [message,setMessage] = useState(null)
   const [formValue,setFormValue] = useState({})
   const auth = useSelector((state) => state.auth )

   const handleSubmit = (event) => {
      if (event) event.preventDefault()
      if ( formValue.name && formValue.email && formValue.password ){
         users.map((user) => {
            if ( user.email == formValue.email ){ registered = true }
         })
         if ( !registered ){
            setMessage('کاربر موردنظر با موفقیت ثبت نام شد')
            dispatch(REGISTER_ACTION(formValue))
            router.push('/login')
         }
         else{
            setMessage('کاربر موردنظر قبلا ثبت نام کرده است')
         }
      }
      else{
         setMessage('لطفا فیلد های زیر را تکمیل کرده و مجدد اقدام کنید')
      }
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
            { message && <Alert>{message}</Alert> }
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
                  <Button type='submit' loading={auth.loading}>ثبت نام</Button>
               </FormControl>
               <Hyperlink href='/login' text='قبلا ثبت نام کرده اید؟'>وارد شوید</Hyperlink>
            </form>
         </LayoutAuth>
      </>
   )
}

Register.getInitialProps = async ({ reduxStore }) => {
   await reduxStore.dispatch(REGISTER_INFO_ACTION())
   const { auth } = reduxStore.getState()
   return { users: auth.users }
}

export default Register