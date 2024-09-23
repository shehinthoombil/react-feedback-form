import React from 'react'

function InputField({ placeholder, label }) {
  return (
    <>
      <h2 className='text-text font-bold mb-2'>{label}</h2>
      <input type="text"
        placeholder={placeholder}
        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
      />
    </>
  )
}

export default InputField
