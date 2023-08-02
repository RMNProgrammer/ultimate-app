import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const H5 = ({ children }) => { 
   const theme = useTheme()
   return(
      <h5 className={css` 
         margin: 0.6rem 0 1.2rem;
         font-size: ${theme.typography.h5.fontSize}em;
         font-weight: ${theme.typography.h5.fontWeight};
         line-height: ${theme.typography.h5.lineHeight};
         `}
      >
         {children}
      </h5>
   )
}

export default H5