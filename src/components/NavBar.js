import React, { useState } from 'react';
import {
  Container,
  NavLink,
  Navbar,
  Nav,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
} from 'reactstrap';

const NavBar = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Navbar
      expand='md'
      color='light'
      light
      style={{
        height: '70px',
        boxShadow: '-1px 37px 85px -47px rgba(33,33,33,1)',
      }}
    >
      <Container fluid>
        <NavbarBrand href='/'>
          <strong>
            <span>Image Sharing</span>
          </strong>
        </NavbarBrand>

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
                  src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d7/d77a676e25c4e2e491c15ed49b6f097e957dd89b_full.jpg'
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
                    style={{ height: '2rem' }}
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
                    style={{ height: '2rem' }}
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
