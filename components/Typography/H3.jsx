import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H3 = ({ children }) => { 
   const theme = useTheme()
   return(
      <h3 className={css` 
         margin: 0.6rem 0 1.2rem;
         font-size: ${theme.typography.h3.fontSize}em;
         font-weight: ${theme.typography.h3.fontWeight};
         line-height: ${theme.typography.h3.lineHeight};
         `}
      >
         {children}
      </h3>
   )
}

export default H3