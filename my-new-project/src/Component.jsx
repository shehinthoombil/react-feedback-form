import React from 'react'
import InputField from './components/InputField'
import Slider from './components/Slider'

function Component() {
    return (
        <div className='p-10 max-w-md mx-auto bg-primary rounded-lg shadow-md'>
            <h5 className="text-xl  text-text mb-7">Please Provide your Feedback</h5>

            <div className='space-y-6'>
                <div className='flex gap-5'>
                    <div>
                        <InputField placeholder='Please enter your name' label='Name' />
                    </div>

                    <div>
                        <InputField placeholder='+91 0000000000' label='Contact number' />
                    </div>
                </div>
                <div className='w-1/2 pr-3'>
                    <InputField placeholder='xyz123@gmail.com' label='Email Address' />
                </div>
            </div>
            <h5 className='text-text font-bold mb-2 mt-7'>Share your experiance in scaling</h5>
            <div>
                <Slider />
            </div>
            <div className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                <textarea
                    placeholder='Add your comments'
                    rows="1"
                    className='w-full resize-none p-2 border-none focus:outline-none'
                ></textarea>
            </div>
            <div className='bg-[#20B2AA] text-center text-white font-bold py-2 px-4 mt-5 rounded-lg'>
                <button className='rounded-lg'>SUBMIT</button>
            </div>
        </div>

    )
}

export default Component
