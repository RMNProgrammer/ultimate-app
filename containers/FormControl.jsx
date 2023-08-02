import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const FormControl = ({ children }) => { 
   const theme = useTheme()
   return(
      <div 
         className={css`
            display: flex;
            padding: ${theme.spaces[3]} 0;
         `}
      >
         {children}
      </div>
   )
}

export default FormControl
