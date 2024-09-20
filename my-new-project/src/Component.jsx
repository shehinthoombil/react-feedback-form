import React from 'react'
import InputField from './components/InputField'

function Component() {
    return (
        <div className='p-10 max-w-md mx-auto bg-primary rounded-lg shadow-md'>
            <h5 className="h- text-xl text-gray-600 mb-7">Please Provide your Feedback</h5>

            <div className='space-y-6'>
                <div className='flex gap-5'>
                    <div>
                        <InputField placeholder='Please enter your name' label='Name'/>
                    </div>

                    <div>
                        <InputField placeholder='Please enter your number'  label='Contact number'/>
                    </div>
                </div>
                <div className='w-1/2 pr-3'>
                     <InputField placeholder='Please enter your email'  label='Email Address'/>
                </div>
                   
            </div>
        </div>

    )
}

export default Component
