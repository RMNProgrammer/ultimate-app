import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H4 = ({ children }) => { 
   const theme = useTheme()
   return(
      <h4 className={css` 
         margin: 0.6rem 0 1.2rem;
         font-size: ${theme.typography.h4.fontSize}em;
         font-weight: ${theme.typography.h4.fontWeight};
         line-height: ${theme.typography.h4.lineHeight};
         `}
      >
         {children}
      </h4>
   )
}

export default H4