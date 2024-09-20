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
                        <InputField placeholder='Please enter your number' label='Contact number' />
                    </div>
                </div>
                <div className='w-1/2 pr-3'>
                    <InputField placeholder='Please enter your email' label='Email Address' />
                </div>
            </div>
            <h5 className='text-text font-medium mb-2 mt-7'>Share your experiance in scaling</h5>
            <div>
            <Slider />
            </div>
        </div>

    )
}

export default Component
