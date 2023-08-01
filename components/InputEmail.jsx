import React from 'react'
import Input from './Input'
import { css, cx } from '@emotion/css'

const InputEmail = ({ placeholder }) => { 
   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <Input type='email' placeholder={placeholder} direction='ltr' />
      </div>
   )
}

export default InputEmail