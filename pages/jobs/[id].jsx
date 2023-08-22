import Head from 'next/head'
import { Button, H1, H2, Hyperlink } from '../../components'
import { css, cx } from '@emotion/css'
import JobCard from '@/containers/JobCard'
import LayoutPage from '../../containers/LayoutPage'
import { GET_SINGLE_JOB_ACTION } from '../../actions'

const singleJob = ({ job, loading }) => {
   return (
      <>
         <Head>
            <title>ریموت جابب - کار کردن از راه دور</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <LayoutPage>
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
                  {job.title}
               </H2>
               <div>
                  { loading && <Button loading/> }
                  { typeof job == 'string' && 
                     <div 
                        className={css`
                           width:100%;
                           padding:0 25px;
                           font-size:17px;
                        `}
                     >
                        <H1>این صفحه وجود ندارد</H1> 
                        <Hyperlink href='/'>برگشت به صفحه اصلی</Hyperlink>
                     </div>
                  }
                  { typeof job == 'object' && !loading &&             
                     <JobCard 
                        data={{
                           job_type: job.job_type,
                           compony: job.compony,
                           date: job.date,
                           mobile: job.mobile,
                        }}
                     />
                  }
               </div>
            </div>
         </LayoutPage>
      </>
   )
}

singleJob.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(GET_SINGLE_JOB_ACTION(query.id))
  const { job } = reduxStore.getState()
  return { loading: job.loading, job: job.job }
}

export default singleJob
