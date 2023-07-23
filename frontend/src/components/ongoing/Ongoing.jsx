import React from 'react'
import OngoingCard from './OngoingCard'
import { useSelector } from 'react-redux'

const Ongoing = () => {
    const projects = useSelector(state => state.projectFetchReducer.data?.data)
  return (
    <div className='bg-white rounded-md p-2'>
        <div>
            <h2 className='text-red-600 text-xl'>On-Going Projects</h2>
            <div>
                {
                    projects &&
                    projects.map((item) => (
                        <OngoingCard key={item._id} project={item} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Ongoing