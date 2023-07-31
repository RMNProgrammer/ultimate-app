import React from 'react'
import { css, cx } from '@emotion/css'

const Input = ({ type = 'text', placeholder }) => { 
   return(
      <div 
         className={css`
            width: 100%;
            margin: 25px 0px;
         `}
      >
         <input type={type} placeholder={placeholder} className={css`padding:10px;height:20px;font-size:13.9px;text-align:right;`} />
      </div>
   )
}

export default Input
