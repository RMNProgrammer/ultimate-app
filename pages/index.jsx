import Head from 'next/head'
import { H2 } from '../components'
import { css, cx } from '@emotion/css'
import LayoutPage from '../containers/LayoutPage'
import JobCardList from '../containers/JobCardList'
import HomePageBanner from '../containers/HomePageBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>ریموت جابب - کار کردن از راه دور</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutPage>
        <HomePageBanner />
        <div
          className={css`
            display: flex;
            margin: 0 auto;
            padding: 32px 0;
            max-width: 1000px;
            flex-direction: column;
          `}
        >
          <H2
            className={css`
              padding-bottom: 32px;
            `}
          >
            لیست جاب‌ها
          </H2>
          <div>
            <JobCardList />
          </div>
        </div>
      </LayoutPage>
    </>
  )
}
