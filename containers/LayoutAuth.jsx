import React from 'react'
import { css, cx } from '@emotion/css'

const LayoutAuth = ({ children }) => { 
   return(
      <div 
         className={css`
            height: 97vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
         `}
      >
         <div>
            <img
               className={css`
                  width: 200px;
               `}
               src='logo.png' 
            />
         </div>
         <div
            className={css`
               font-size: 17px;
               text-align: center;
            `}
         >
            {children}
         </div>
      </div>
   )
}

export default LayoutAuth
