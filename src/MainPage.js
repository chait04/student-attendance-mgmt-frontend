import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #4299e1, #2b6cb0)',
        color: 'white',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        Student Attendance Management
      </h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link
          to="/students"
          style={{
            backgroundColor: '#3182ce',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2b6cb0')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
        >
          View Students
        </Link>
        <Link
          to="/add"
          style={{
            backgroundColor: '#38a169',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2f855a')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#38a169')}
        >
          Add Student
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
