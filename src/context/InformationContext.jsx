import React, { createContext, useState } from 'react'


export const dataContext = createContext(null);

const InformationContext = ({ children }) => {

  const [data, setData] = useState("Helloo Abhi");


  return (
    <div className='w-[80%] mx-auto p-10 bg-gray-400'>
      <h1>
        <dataContext.Provider value={[data, setData]}>
          {children}
        </dataContext.Provider>
      </h1>
    </div>
  )
}

export default InformationContext
