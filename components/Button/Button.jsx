import React from 'react'
import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'

const Button = ({ type = 'button', children, onClick = () => {}, loading }) => { 
   const theme = useTheme()

   return(
      <div 
         className={css`
            width: 100%;
         `}
      >
         <button  type={type} 
                  className={css`
                     color:white;
                     width: 100%;
                     cursor:pointer;
                     position: relative;
                     display:inline-block;
                     text-decoration: none;
                     transition-duration: 0.4s;
                     padding:${theme.spaces[4]};
                     border:${theme.borderRadius[1]};
                     border-radius:${theme.borderRadius[1]};
                     background-color:${theme.colors.primary};
                     font-size:${theme.typography.paragraph.fontSize};
                        &:hover{
                           box-shadow: ${theme.boxShadow.light}
                        }
                     }
                  `}
                  onClick={onClick}
         >
            { loading && 'چند لحظه صبر کنید...' }
            { !loading && children }
         </button>
      </div>
   )
}

export default Button