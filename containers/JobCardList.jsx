import JobCard from './JobCard'
import { useEffect } from 'react'
import { Button } from '../components'
import { GET_LIST_JOB_ACTION } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

const JobCardList = () => {
  const dispatch = useDispatch()
  const { jobs, loading } = useSelector((state) => state.job )

  useEffect(()=>{
    dispatch(GET_LIST_JOB_ACTION())
  },[])

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
