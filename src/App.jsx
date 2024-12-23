import React, { useContext } from 'react';
import DigitalClock from './components/DigitalClock';
import FormHandling from './components/FormHandling';
import ReactHookForm from './components/ReactHookForm';
import ApplyCss from './components/ApplyCss';
import { dataContext } from './context/InformationContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/routing/Nav';
const App = () => {

  const [data] = useContext(dataContext)

  return (
    <>

      {/* For Context Api */}
      {/* <div className="w-[80%] mx-auto flex flex-col items-center justify-center bg-gray-200 p-10">
        <h1 className='text-xl text-black'>Important Data</h1>
        <h1 className='text-xl text-black'>{data}</h1>
      </div> */}


      <div className='w-[80%] mx-auto bg-gray-400 rounded'>
        <Nav />
        <BrowserRouter>
          <Routes >
            <Route path='/' element={ <Home />} />
            <Route path='/products' element={ <Products />} />
            <Route path='/services' element={ <Services />} />
          </Routes>
        </BrowserRouter>
      </div>


    </>
  );
}

export default App;
