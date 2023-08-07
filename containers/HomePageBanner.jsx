import { css, cx } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { H1, Paragraph, Button } from '../components'

const HomePageBanner = () => {
  const theme = useTheme()
  return (
    <div className={css`background-color: ${theme.colors.backgroundColorPrimary};`}>
      <div
        className={css`
          display: flex;
          margin: 0 auto;
          padding: 32px 0;
          max-width: 400px;
          text-align: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <H1 className={css`padding-bottom: 16px;`}>
          ما ریموت کار میکنیم
        </H1>
        <Paragraph>
          سایت ریموت جابب این امکان را برای شما فراهم می‌کند که با تعداد زیادی
          از مخاطبان خود برای تبلیغات کار ریموت خود در ارتباط باشید.
        </Paragraph>
        <Button type="button">ثبت جاب در ریموت جابب</Button>
      </div>
    </div>
  )
}

export default HomePageBanner
