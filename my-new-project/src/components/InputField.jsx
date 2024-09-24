import React from 'react'
import Component from '../component'

function InputField({ placeholder, label, value, onChange }) {
  return (
    <>
      <h2 className='text-text font-bold mb-2'>{label}</h2>
      <input type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sm'
      />
    </>
  )
}

export default InputField
