import React from 'react';
import ApplicationForm from '../forms/ApplicationForm';

const Application = () => {
  return (
    <div className="container">
      <div className="applicationContent">
        <p>
          <span style={{ fontSize: '20px' }}>Requirement 2: </span>
          After submitting the form with the "join us" button below the app will
          navigate back to '/' where the same mechanism will not display the
          innitial "join us" buttons
        </p>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default Application;
