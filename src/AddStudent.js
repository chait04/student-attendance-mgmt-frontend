import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './AddStudent.css';

const AddStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://127.0.0.1:8000/api/students/', {
        first_name: firstName,
        last_name: lastName,
        email: email,
      })
      .then(() => {
        navigate('/students');
      })
      .catch((error) => {
        console.error('There was an error adding the student!', error);
      });
  };

  return (
    <div className="add-student-container">
      <h2 className="add-student-title">Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Student
        </button>
      </form>
      <Link to="/students" className="back-button">
        Back to Student List
      </Link>
    </div>
  );
};

export default AddStudent;
