import React from 'react'
import theme from '../configs/theme'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@emotion/react'

const mountWithTheme = (children) => {
   return renderer.create(
      <ThemeProvider theme={theme}>
         {children}
      </ThemeProvider>
   )
}

export default mountWithTheme
