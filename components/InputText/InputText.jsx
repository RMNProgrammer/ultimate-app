import React from 'react'
import Input from '../Input/Input'
import { css, cx } from '@emotion/css'

const InputText = (props) => { 
   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <Input type='text' {...props} />
      </div>
   )
}

export default InputText