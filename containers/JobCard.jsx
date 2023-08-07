import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { H2, H3, H4 } from '../components'

const JobCard = () => {
  const theme = useTheme()
  return (
    <div
      className={css`
        display: flex;
        cursor: pointer;
        position: relative;
        align-items: center;
        margin-bottom: 12px;
        transition-duration: 0.4s;
        padding: 16px 48px 16px 8px;
        justify-content: space-between;
        border-radius: ${theme.borderRadius[1]};
        background-color: ${theme.colors.backgroundColorPrimary};
        &:hover {
          color: #c23616;
          box-shadow: ${theme.boxShadow.light};
          .inside {
            border-color: white;
          }
        }
      `}
    >
      <div>
        <H2>شرکت ما</H2>
        <H4>برنامه‌نویس Frontend</H4>
        <H2>تمام‌وقت</H2>
      </div>
      <div
        className={css`
          height: 90px;
          display: flex;
          min-width: 300px;
          align-items: center;
          transition-duration: 0.4s;
          border-left: ${theme.border[2]} solid;
          border-color: ${theme.borderColor.light};
        `}
      >
        <H3>۱ اردیبهشت</H3>
      </div>
    </div>
  )
}

export default JobCard
