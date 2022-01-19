import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  return (
    <div className="container">
      <div className="content">
        <div className="inner">
          <Link
            to="https://reactjs.org/docs/hooks-reference.html#usestate"
            target={'_blank'}
          >
            Here is the useState Documentation
          </Link>
          <Link
            to="https://reactjs.org/docs/context.html#updating-context-from-a-nested-component"
            target={'_blank'}
          >
            Here is the Context Documentation
          </Link>
        </div>
        <p>
          <span style={{ fontSize: '20px' }}>Requirement 1: </span>
          After pressing either two of the buttons on this page, the page will
          navigate to '/application'. On the /application route the navbar "join
          us" button will not be displayed{' '}
        </p>

        <Link to="/application">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
