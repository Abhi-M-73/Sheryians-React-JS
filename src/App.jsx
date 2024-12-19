import React, { useContext } from 'react';
import DigitalClock from './components/DigitalClock';
import FormHandling from './components/FormHandling';
import ReactHookForm from './components/ReactHookForm';
import ApplyCss from './components/ApplyCss';
import {dataContext} from './context/InformationContext'
const App = () => {

  const [data, setData] = useContext(dataContext)

  return (
    <div className="w-[80%] mx-auto flex flex-col items-center justify-center bg-gray-200 p-10">
      <h1 className='text-xl text-black'>Important Data</h1>
      <h1 className='text-xl text-black'>{data}</h1>
    </div>
  );
}

export default App;
