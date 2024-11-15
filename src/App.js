import React from 'react';
import MainPage from './MainPage';
import StudentList from './StudentList';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
