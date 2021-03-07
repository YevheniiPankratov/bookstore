import React from 'react';
import './errorIndicator.css';

const ErrorIndicator = () => {
    return <div className='errorIndicator'>
              <h1>Error! Sorry, it could be a server error!</h1>
              <h2>Please try reloading the page</h2>
            </div>;
}

export default ErrorIndicator;