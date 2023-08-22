import React from 'react'
import { Global, css } from '@emotion/react'

const Reset = () => { 
   return(
      <Global
         styles={css`
            @font-face {
               font-family: Nazanin;
               src: url('../font/Nazanin.ttf');
            }

            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
	            margin: 0;
	            border: 0;
               padding: 0;
	            font-size: 100%;
	            vertical-align: baseline;
            }

            article, aside, details, figcaption, figure, 
            footer, header, hgroup, menu, nav, section {
	            display: block;
            }

            body {
	            line-height: 1;
            }

            ol, ul {
	            list-style: none;
            }

            blockquote, q {
	            quotes: none;
            }

            blockquote:before, blockquote:after,
            q:before, q:after {
	            content: '';
	            content: none;
            }

            table {
	            border-collapse: collapse;
	            border-spacing: 0;
            }

            html, body{
               color: #333;
               direction: rtl;
               font-size: 16px;
               font-weight: 400;
               line-height: 1.65;
               font-family: Nazanin;
            }

            * {
               direction: rtl;
               font-size: 16px;
               font-family: Nazanin;
               box-sizing: border-box;
            }
         `}
      />
   )
}

export default Reset