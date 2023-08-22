import React from 'react'
import Link from 'next/link'
import { css, cx } from '@emotion/css'
import { Paragraph } from '../Typography'

const Hyperlink = ({ href, text, children, colorAddit, displayAddit }) => { 
   return(
      <div>
         { text && <Paragraph>{text}</Paragraph> }
         <Link legacyBehavior href={href} >
            <a className={css`
                  cursor:pointer;
                  text-decoration:none;
                  color:${ colorAddit && 'black' };
                  padding-right:${ !colorAddit && '15px'};
                  display:${ displayAddit && 'inline-block' };
               `}
            >
               {children}
            </a>
         </Link>
      </div>

   )
}

export default Hyperlink