import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './EditStudent.css';

const EditStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://127.0.0.1:8000/api/students/${id}/`)
      .then((response) => {
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the student!", error);
        setError('Failed to load student data');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`https://student-attendance-mgmt-backend-1.onrender.com/students/${id}/`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
    })
    .then(() => {
      navigate('/students');
    })
    .catch((error) => {
      console.error("There was an error updating the student!", error);
    });
  };

  if (loading) {
    return <div className="edit-student-container">Loading...</div>;
  }

  if (error) {
    return <div className="edit-student-container">{error}</div>;
  }

  return (
    <div className="edit-student-container">
      <h2 className="edit-student-title">Edit Student</h2>
      <form onSubmit={handleSubmit} className="edit-student-form">
        <div className="mb-4">
          <label className="edit-student-label">First Name</label>
          <input
            type="text"
            className="edit-student-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="edit-student-label">Last Name</label>
          <input
            type="text"
            className="edit-student-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="edit-student-label">Email</label>
          <input
            type="email"
            className="edit-student-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="edit-student-button">
          Update Student
        </button>
      </form>
      <Link to="/students" className="edit-student-back">
        Back to Student List
      </Link>
    </div>
  );
};

export default EditStudent;
