import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt='logo' />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0344a',
    alignItems: 'center',
    borderBottom: 'thick solid #e0344a',
    width: '100%',
    position: 'fixed',
  },
  logo: {
    width: '144px',
  },
  title: {
    margin: 0,
  },
});

export default Header;
