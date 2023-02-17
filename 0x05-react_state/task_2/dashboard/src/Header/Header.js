import React, { useContext } from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <header className={css(headerStyles.appHeader)}>
        <img src={logo} alt="logo" className={css(headerStyles.appLogo)}/>
        <h1 className={css(headerStyles.h1)}>School dashboard</h1>
      </header>

      {
      user.isLoggedIn && <section id="logoutSection">
        <h2>Welcome<strong> {user.email} </strong><em><a href="#" onClick={logOut}>(logout)</a></em>
        </h2>
      </section>
      }
    </>
  );
}

const headerStyles = StyleSheet.create({
	h1: {
		marginLeft: '10rem',
    float: 'right',
    flex: 2,
    '@media (max-width: 900px)': {
      margin: 'auto'
    }
	},

	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: '#E11D3F',
		borderBottom: '1px solid #E11D3F',
    width: '100%',
    boxSizing: 'border-box'
	},

	appLogo: {
		maxHeight: '200px',
		maxWidth: '200px',
    height: 'auto',
    width: 'auto',
    flex: 1
	}
});

export default Header;
