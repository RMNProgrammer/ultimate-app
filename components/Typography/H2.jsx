import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H2 = ({ children }) => { 
   const theme = useTheme()
   return(
      <h2 className={css` 
         margin: 0.6rem 0 1.2rem;
         font-size: ${theme.typography.h2.fontSize}em;
         font-weight: ${theme.typography.h2.fontWeight};
         line-height: ${theme.typography.h2.lineHeight};
         `}
      >
         {children}
      </h2>
   )
}

export default H2