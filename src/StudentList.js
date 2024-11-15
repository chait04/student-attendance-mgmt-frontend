import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/students/')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the students!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/students/${id}/`)
      .then(() => {
        setStudents(students.filter(student => student.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the student!", error);
      });
  };

  return (
    <div className="student-list-container">
      <h2 className="student-list-title">Students List</h2>
      <Link to="/" className="student-list-back-button">
        Back to Main Page
      </Link>
      <div className="student-list-table-container">
        <table className="student-list-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                  <Link to={`/edit/${student.id}`} className="edit-button">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
