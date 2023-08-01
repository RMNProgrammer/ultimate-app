import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Button = ({ type = 'button', children }) => { 
   const theme = useTheme()

   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <button  type={type} 
                  className={css`
                     padding:15px;
                     font-size:14px;
                     cursor:pointer;
                     border-radius:20px;
                     background-color:white;
                     color:${theme.colors.primary};
                     border:2px solid ${theme.colors.secondary};
                  `}
         >
            {children}
         </button>
      </div>
   )
}

export default Button