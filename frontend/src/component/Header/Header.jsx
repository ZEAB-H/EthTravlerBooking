import React from 'react'
import {Container, Row ,Button} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.jpg'

const nav_links=[

  {
    path:'/home',
    display:'Home'
  },
  {
    path:'#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]


const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">

          {/* ======== Logo Goes Here ========== */}
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            
          {/* ======== Logo Ends Here ========== */}        </div>

      </Row>
    </Container>
  </header>

}

export default Header