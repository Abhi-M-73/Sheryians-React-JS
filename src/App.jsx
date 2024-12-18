import React from 'react';
import DigitalClock from './components/DigitalClock';
import FormHandling from './components/FormHandling';
import ReactHookForm from './components/ReactHookForm';
import ApplyCss from './components/ApplyCss';

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white">
      {/* <DigitalClock /> */}
      {/* <FormHandling /> */}
      {/* <ReactHookForm /> */}
      <ApplyCss />
    </div>
  );
}

export default App;
