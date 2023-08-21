import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Alert = ({ children }) => {
  const theme = useTheme()

   return (
      <div
         className={css`
            color:#c0392b;
            cursor:default;
            margin-bottom:10px;
            border-radius:20px;
            text-decoration:none;
            transition-duration:0.4s;
            border:2px solid #c0392b;
            padding:${theme.spaces[3]};
         `}
      >
         {children}
      </div>
   )
}

export default Alert