import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Paragraph = ({ children }) => { 
   const theme = useTheme()
   return(
      <p className={css` 
         margin: 0.6rem 0 1.2rem;
         font-size: ${theme.typography.paragraph.fontSize}em;
         font-weight: ${theme.typography.paragraph.fontWeight};
         line-height: ${theme.typography.paragraph.lineHeight};
         `}
      >
         {children}
      </p>
   )
}

export default Paragraph