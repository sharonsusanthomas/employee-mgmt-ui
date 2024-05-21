import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import AddEmployee from './AddEmployee'; // Correct the filename casing
import UpdateEmployee from './UpdateEmployee'; // Import the UpdateEmployee component
import ViewEmployee from './ViewEmployee'; // Import the ViewEmployee component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/add-employee' element={<AddEmployee />} /> {/* Update path to match the casing */}
          <Route path='/update-employee/:id' element={<UpdateEmployee />} /> {/* Define the UpdateEmployee route */}
          <Route path='/view-employees' element={<ViewEmployee />} /> {/* Define the ViewEmployee route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
