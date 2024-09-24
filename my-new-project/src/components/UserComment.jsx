import React from 'react'

function UserComment({ feedback }) {
    return (
        <div className='flex justify-between items-center  min-h-[100px] w-[410px] bg-white px-6 rounded-lg shadow-lg mr-60'>
            <div>
                <p className='text-text font-bold mt-6'> {feedback.comments}</p>
                <h2 className='text-sm text-text  mt-1'>{feedback.name}</h2>
            </div>

            <div className="flex flex-col items-center font-bold text-[#39AB26] text-xs">
                <img src={feedback.mood.image} alt="Mood" className='w-12 h-12'/>
                <p>{feedback.mood.description}</p>
            </div>


            {/* <h2 className='text-sm text-text'>Contact: {feedback.contact}</h2>
            <h2 className='text-sm text-text'>Email: {feedback.email}</h2> */}

        </div>
    )
}

export default UserComment
