import React from 'react'

const InformationContext = ({children}) => {
  return (
    <div className='w-[80%] mx-auto p-10 bg-gray-400'>
      <h1>{children}</h1>
    </div>
  )
}

export default InformationContext
