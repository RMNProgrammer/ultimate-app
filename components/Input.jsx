import React from 'react'
import { css, cx } from '@emotion/css'

const Input = ({ type = 'text', placeholder, direction }) => { 
   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <input type={type} placeholder={placeholder} className={css`padding:8px;height:40px;width:220px;direction:${direction}`} />
      </div>
   )
}

export default Input
