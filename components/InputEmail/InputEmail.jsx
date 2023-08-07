import React from 'react'
import Input from '../Input/Input'
import { css, cx } from '@emotion/css'

const InputEmail = (props) => { 
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
         <Input type='email' {...props} />
      </div>
   )
}

export default InputEmail