import React from 'react';
import {Link} from 'react-router-dom';
import './Signup.css';

function Welcome(props) {
    return (
        <div>
          <h1>Welcome to BLOG'S page</h1>  
          <Link to="/home" className='btn btn-info'>View Blogs</Link>

        </div>
    );
}

export default Welcome;