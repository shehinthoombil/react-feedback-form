import React from 'react'

function UserComment({ feedback }) {
    return (
        <div className='min-h-[100px] w-[410px] bg-white px-6 rounded-lg shadow-lg mr-60'>
            {/* <p className='text-text font-bold'>Comments from the user</p> */}
            <p className='text-text font-bold'> {feedback.mood}</p>
            <p className='text-text font-bold'> {feedback.comments}</p>

            {/* <h2 className='text-sm text-text'>User Name</h2> */}
            <h2 className='text-sm text-text'>{feedback.name}</h2>
            {/* <h2 className='text-sm text-text'>Contact: {feedback.contact}</h2>
            <h2 className='text-sm text-text'>Email: {feedback.email}</h2> */}

        </div>
    )
}

export default UserComment
