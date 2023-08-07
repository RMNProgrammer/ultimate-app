import JobCard from './JobCard'

const JobCardList = () => {
  return (
    <div>
      {[0, 1].map((item,index) => (
        <JobCard data={item} key={index} />
      ))}
    </div>
  )
}

export default JobCardList
