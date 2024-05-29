import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import AddEmployee from './AddEmployee'; // Correct the filename casing
import UpdateEmployee from './UpdateEmployee'; // Import the UpdateEmployee component
import ViewEmployee from './ViewEmployee'; // Import the ViewEmployee component
import Init from './Init';
import Logs from './EmployeeLogs';
import Profile from './ProfilePage';
import Employeehome from './Employeehome'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Init />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/add-employee' element={<AddEmployee />} /> {/* Update path to match the casing */}
          <Route path='/update-employee/:id' element={<UpdateEmployee />} /> {/* Define the UpdateEmployee route */}
          <Route path='/view-employees' element={<ViewEmployee />} /> {/* Define the ViewEmployee route */}
          <Route path='/employeelogs' element={<Logs/>} /> {/* Define the ViewEmployee route */}
          <Route path="/profile" element={<Profile/>}  />
          <Route path='/Employeehome' element={<Employeehome />} /> {/* Define the UpdateEmployee route */}

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;