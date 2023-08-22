import reduxCall from '../utils/reduxCall'

const GET_LIST_JOB_ACTION = () => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: '/jobs',
            method: 'GET',
            name: 'GET_LIST_JOB',
        })
    }
}

const GET_SINGLE_JOB_ACTION = (jobId) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/jobs/${jobId}`,
            method: 'GET',
            name: 'GET_SINGLE_JOB',
        })
    }
}

export { GET_LIST_JOB_ACTION, GET_SINGLE_JOB_ACTION }