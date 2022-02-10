import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
    return (
        <NavbarContainer>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark px-10 ">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="add-article">Add Article</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="signup">Sign In</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
        </NavbarContainer>
    );
}

export default Navbar;

const NavbarContainer = styled.div`
       
        
    .nav-link{
        color:#fff !important;
        &:hover{
            background: var(--light-green);
        }
    }
`;