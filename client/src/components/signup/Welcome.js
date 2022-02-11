import React from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';

function Welcome(props) {
    return (
        <div>
          <Link to="/home" className='btn btn-info'>View Blogs</Link>

        </div>
    );
}

export default Welcome;