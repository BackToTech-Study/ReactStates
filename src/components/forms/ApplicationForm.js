// import React, { useState } from 'react';
import Button from '../button/Button';

const ApplicationForm = (props) => {
  // What do we need to declare first?

  const handleSubmit = async (e) => {
    e.preventDefault();
    // what happens at form submit?
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-header">
        <h1>Application Form</h1>
      </div>

      <div className="form-body">
        <div className="horizontal-group">
          <div className="form-group left">
            <label htmlFor="firstname" className="label-title">
              First name:*
            </label>
            <input
              type="text"
              id="firstname"
              className="form-input"
              placeholder="enter your first name"
              // values & actions
            />
          </div>
          <div className="form-group right">
            <label htmlFor="lastname" className="label-title">
              Last name:
            </label>
            <input
              type="text"
              id="lastname"
              className="form-input"
              placeholder="enter your last name"
              // values & actions
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address" className="label-title">
            Address Line:
          </label>
          <input
            type="text"
            id="address"
            className="form-input"
            placeholder="street name and number"
            // values & actions
          />
        </div>
        <div className="horizontal-group">
          <div className="form-group left">
            <label htmlFor="phone" className="label-title">
              Phone number:
            </label>
            <input
              type="number"
              id="phone"
              className="form-input"
              placeholder="555-555"
              // values & actions
            />
          </div>
          <div className="form-group right">
            <label htmlFor="email" className="label-title">
              Email address:
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="john@doe.com"
              // values & actions
            />
          </div>
        </div>
        <div className="form-footer">
          <Button text="Join us" action={handleSubmit}></Button>
        </div>
      </div>
    </form>
  );
};

export default ApplicationForm;
