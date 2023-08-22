import JobCard from './JobCard'
import { Button, Hyperlink } from '../components'

const JobCardList = ({ jobs, loading }) => {
   return (
      <div>
         { loading && <Button loading={loading}/> }
         { !loading && jobs && jobs.map((item) => (
            <Hyperlink href={`/jobs/${item.id}`} key={item.id} colorAddit>
               <JobCard
                  data={{
                     title: item.title,
                     job_type: item.job_type,
                     compony: item.compony,
                     date: item.date,
                  }}
               />
            </Hyperlink>
         ))}
      </div>
   )
}

export default JobCardList
