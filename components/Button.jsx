import React from 'react'
import { css, cx } from '@emotion/css'

const Button = ({ type = 'button', children }) => { 
   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <button type={type}>{children}</button>
      </div>
   )
}

export default Button