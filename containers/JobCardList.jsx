import JobCard from './JobCard'
import { Button } from '../components'

const JobCardList = ({ jobs, loading }) => {
  return (
    <div>
      { loading && <Button loading={loading}/> }
      { !loading && jobs && jobs.map((item) => (
        <JobCard data={item} key={item.id} />
      ))}
    </div>
  )
}

export default JobCardList
