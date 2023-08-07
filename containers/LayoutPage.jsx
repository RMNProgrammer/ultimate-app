import { css, cx } from '@emotion/css'
import { useSelector } from 'react-redux'
import { useTheme } from '@emotion/react'
import { H3, H2, Hyperlink, Button, Paragraph, Small } from '../components'

const LayoutPage = ({ children }) => {
  const auth = useSelector((state) => state.auth)
  const theme = useTheme()
  
  return (
    <div
      className={css`max-width: 100%;`}
    >
      <div
        className={css`background-color: ${theme.colors.backgroundColorPrimary};`}
      >
        <div
          className={css`
            display: flex;
            margin: 0 auto;
            padding: 16px 0;
            max-width: 1000px;
            justify-content: space-between;
          `}
        >
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            <img
              className={css`max-width: 100px;`}
              src="logo.png"
            />
            <H3
              className={css`
                height: 15px;
                width: 103px;
                line-height: 25px;
                text-align: center;
                padding-right: 15px;
                text-transform: uppercase;
              `}
            >
              <Hyperlink
                href="/"
                className={css`border: none;`}
              >
                REMOTE JOBB
              </Hyperlink>
            </H3>
          </div>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}
          >
            { !auth || !auth.logged &&
              <ul
                className={css`
                  display: flex;
                  li {
                    padding: 0 16px;
                    display: flex;
                    align-items: center;
                  }
                `}
              >
                <li>
                  <Hyperlink
                    className={css`border: none;`}
                    href="/login"
                  >
                    ورود
                  </Hyperlink>
                </li>
                <li>
                  <Hyperlink
                    className={css`border: none;`}
                    href="/register"
                  >
                    <Button href="/register">ثبت نام</Button>
                  </Hyperlink>
                </li>
              </ul> 
            }
            { auth && auth.logged && <div>خوش آمدید</div> }
          </div>
        </div>
      </div>
      <div>
        <div
          className={css`
            width: 100%;
            min-height: 400px;
            background-color: ${theme.colors.backgroundColorDefault};
          `}
        >
          {children}
        </div>
      </div>
      <div
        className={css`
          width: 100%;
          background-color: ${theme.colors.backgroundColorSecondary}; 
        `}
      >
        <div
          className={css`
            margin: 0 auto;
            padding: 32px 0;
            min-height: 300px;
            max-width: 1000px;
          `}
        >
          <div>
            <H2
              className={css`
                color: white;
                padding-bottom: 16px;
              `}
            >
              ما ریموت کار میکنیم
            </H2>
            <Paragraph
              className={css`color: white;`}
            >
              ریموت کار کردن استایلی از زندگی است که همراه با انعطاف‌پذیری زیاد،
              فرصت بهره‌وری بیشتر از زمان را می‌دهد. اگر همیشه فکر می‌کردید چرا
              هر روز باید به شرکت بروید، این سایت برای شماست
            </Paragraph>
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 100%;
          padding: 16px 0;
          background-color: ${theme.colors.backgroundColorDefault};
        `}
      >
        <div
          className={css`
            margin: 0 auto;
            max-width: 1000px;
          `}
        >
          <div>
            <ul
              className={css`
                display: flex;
                li {
                  padding: 0 16px;
                }
              `}
            >
              <li>
                <Hyperlink
                  className={css`border: none;`}
                  href="/"
                >
                  درباره ما
                </Hyperlink>
              </li>
              <li>
                <Hyperlink
                  className={css`border: none;`}
                  href="/"
                >
                  تماس با ما
                </Hyperlink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 100%;
          padding: 16px 0;
          background-color: ${theme.colors.backgroundColorPrimary};
        `}
      >
        <div
          className={css`
            margin: 0 auto;
            max-width: 1000px; 
          `}
        >
          <Small>تمامی حقوق متعلق به سایت ریموت‌جابب است</Small>
        </div>
      </div>
    </div>
  )
}

export default LayoutPage
