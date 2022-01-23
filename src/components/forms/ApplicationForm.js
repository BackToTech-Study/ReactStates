import React, { useState } from 'react';
import Button from '../button/Button';
import UserContext from '../../contexts/UserContext';

const ApplicationForm = (props) => {
  function redirectToHomePage() {
    window.location.href = '/';
  }

  // read the context
  const { user, setUser } = React.useContext(UserContext);

  if (user) {
    redirectToHomePage()
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    phone: '',
    email: '',
  });

  const { firstName, lastName, address1, phone, email } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = JSON.stringify({
      firstName,
      lastName,
      address1,
      phone,
      email,
    });

    // context is updated here by calling the value field update function
    setUser(userData);

    // redirecting or refreshing the page will clear the context value. Reinit of the context value is done in the App.js
    redirectToHomePage();
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
              required="required"
              value={firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-group right">
            <label htmlFor="lastname" className="label-title">
              Last name:*
            </label>
            <input
              type="text"
              id="lastname"
              className="form-input"
              placeholder="enter your last name"
              required="required"
              value={lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address" className="label-title">
            Address Line:*
          </label>
          <input
            type="text"
            id="address"
            className="form-input"
            placeholder="street name and number"
            required="required"
            value={address1}
            onChange={(e) =>
              setFormData({ ...formData, address1: e.target.value })
            }
          />
        </div>
        <div className="horizontal-group">
          <div className="form-group left">
            <label htmlFor="phone" className="label-title">
              Phone number:*
            </label>
            <input
              type="number"
              id="phone"
              className="form-input"
              placeholder="555-555"
              required="required"
              value={phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group right">
            <label htmlFor="email" className="label-title">
              Email address:*
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="john@doe.com"
              required="required"
              value={email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
