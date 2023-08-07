import React from 'react'
import Input from '../Input/Input'
import { css, cx } from '@emotion/css'

const InputPassword = (props) => { 
   return(
      <div 
         className={css`
            width: 100%;
            direction: ltr;
            input::placeholder{
               direction: rtl;
            }
         `}
      >
         <Input type='password' {...props} />
      </div>
   )
}

export default InputPassword