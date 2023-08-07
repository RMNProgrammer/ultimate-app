import React from 'react'
import Link from 'next/link'
import { css, cx } from '@emotion/css'
import { Paragraph } from '../Typography'

const Hyperlink = ({ href, text, children }) => { 
   return(
      <div>
         <Paragraph>{text}</Paragraph>
         <Link legacyBehavior href={href} >
            <a className={css`
                  cursor: pointer;
                  margin-right: 25px;
                  display: inline-block;
                  text-decoration: none;
               `}
            >
               {children}
            </a>
         </Link>
      </div>

   )
}

export default Hyperlink