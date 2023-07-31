import React from 'react'
import Input from './Input'
import { css, cx } from '@emotion/css'

const InputText = ({ placeholder }) => { 
   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <Input type='text' placeholder={placeholder} />
      </div>
   )
}

export default InputText