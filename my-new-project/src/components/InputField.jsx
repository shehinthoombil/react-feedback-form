import React from 'react'

function InputField({value,data}) {
  return (
    <>
      <h2 className='text-lg font-medium mb-2'>{data}</h2>
      <input type="text"
      placeholder={value}
      value=''
      className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
      />
    </>
  )
}

export default InputField
