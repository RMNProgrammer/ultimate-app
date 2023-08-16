import React from 'react'
import Button from './Button'
import theme from '../../configs/theme'
import { ThemeProvider } from '@emotion/react'
import mountWithTheme from '../../utils/mountWithTheme'
import { fireEvent, render } from '@testing-library/react'

describe('Button', () => {
   test('Renders Correctly', () => {
      const component = mountWithTheme(<Button>Sample Button</Button>)
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })

   test('Shows Loading state', () => {
      const component = mountWithTheme(
         <Button loading>Sample Button with loading</Button>
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
   })

   test('Renders in DOM correctly', () => {
      const { getByText } = render(
         <ThemeProvider theme={theme}>
            <Button>Sample Button in DOM</Button> 
         </ThemeProvider>
      )
      expect(getByText(/Button/)).toBeTruthy()
   })

   test('OnClick works fine', () => {
      let counter = 0
      const { getByText } = render(
         <ThemeProvider theme={theme}>
            <Button onClick={() => { counter += 1}}>
               Sample Button in DOM
            </Button> 
         </ThemeProvider>
      )
      fireEvent.click(getByText(/Button/))
      expect(counter).toBe(1)
   })
})
