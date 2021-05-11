import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand
} from 'reactstrap';

const NavBar = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Navbar
      expand='md'
      style={{ backgroundColor: 'lightblue', height: '70px', boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)' }}
    >
      <Container>
        <Nav style={{ alignItems: 'center', alignContent:"center" }}>
          <div>
            <NavLink to='/'>
              <NavbarBrand>
                <h5 style={{ alignItems: 'center' }} className="mt-3">
                  <strong>Bank Account Manager</strong>
                </h5>
              </NavbarBrand>
            </NavLink>
          </div>
        </Nav>

        <Nav>
          <div>
            <ButtonDropdown
              className='profile-toggle ml-auto'
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <DropdownToggle
                color='#313131'
                style={{
                  float: 'right',
                  width: '40px',
                }}
                size='xs'
                className='ml-auto'
              >
                <img
                  src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d7/d77a676e25c4e2e491c15ed49b6f097e957dd89b_full.jpg"
                  alt='pp'
                  className='avatar'
                  style={{
                    border: '2px solid #222',
                    width: '30px',
                    borderRadius: '30px',
                  }}
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    to='/'
                    activeClassName='active'
                    className='nav-link'
                    style={{height:"2rem"}}
                  >
                    <p>
                      <i className='fas fa-user-alt mr-2'></i>Profile
                    </p>
                  </NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink
                    to='/'
                    activeClassName='active'
                    className='nav-link'
                    style={{height:"2rem"}}
                  >
                    <p>
                      <i className='fas fa-sign-out-alt mr-2'></i>Logout
                    </p>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
