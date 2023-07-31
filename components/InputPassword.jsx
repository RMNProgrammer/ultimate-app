import React from 'react'
import Input from './Input'
import { css, cx } from '@emotion/css'

const InputPassword = ({ placeholder }) => { 
   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <Input type='password' placeholder={placeholder} />
      </div>
   )
}

export default InputPassword