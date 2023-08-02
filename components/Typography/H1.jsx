import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H1 = ({ children }) => { 
   const theme = useTheme()
   return(
      <h1 className={css` 
         margin: 0.6rem 0 1.2rem;
         font-size: ${theme.typography.h1.fontSize}em;
         font-weight: ${theme.typography.h1.fontWeight};
         line-height: ${theme.typography.h1.lineHeight};
         `}
      >
         {children}
      </h1>
   )
}

export default H1