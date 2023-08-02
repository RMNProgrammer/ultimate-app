import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Small = ({ children }) => { 
   const theme = useTheme()
   return(
      <small className={css` 
         margin-top: 0;
         margin: 0.6rem 0 1.2rem;
         font-size: ${theme.typography.small.fontSize}em;
         font-weight: ${theme.typography.small.fontWeight};
         line-height: ${theme.typography.small.lineHeight};
         `}
      >
         {children}
      </small>
   )
}

export default Small