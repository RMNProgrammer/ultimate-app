import React from 'react'
import { css, cx } from '@emotion/css'

const Input = ({ type = 'text', placeholder, onChange }) => { 
   const handleOnChange = (event) => {
      onChange(event.target.value)
   }
   
   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <input type={type} placeholder={placeholder} onChange={handleOnChange} autoComplete={ type == 'password' ? 'current-password' : '' } className={css`padding:8px;height:40px;width:100%;`} />
      </div>
   )
}

export default Input
