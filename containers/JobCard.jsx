import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { H2, H3, H4 } from '../components'

const JobCard = ({data}) => {
   const theme = useTheme()
   return (
      <div
         className={css`
            display:flex;
            cursor:pointer;
            position:relative;
            align-items:center;
            margin-bottom: 12px;
            transition-duration:0.4s;
            padding:10px 50px 10px 30px;
            justify-content:space-between;
            border-radius:${theme.borderRadius[1]};
            background-color:${theme.colors.backgroundColorPrimary};
               &:hover {
                  color:#c23616;
                  box-shadow:${theme.boxShadow.light};
                  .inside {
                     border-color:white;
                  }
               }
         `}
      >
         <div>
            <H2>{data.compony}</H2>
            <H3>{data.mobile}</H3>
            <H4>{data.title}</H4>
            <H2>{data.job_type}</H2>
         </div>
         <div
            className={css`
               height:90px;
               display:flex;
               text-align:center;
               padding:25px 40px;
               align-items:center;
               transition-duration:0.4s;
            `}
         >
            <H3>{data.date}</H3>
         </div>
      </div>
   )
}

export default JobCard
