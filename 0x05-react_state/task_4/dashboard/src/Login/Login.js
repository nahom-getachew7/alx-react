import React, {useState, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(e.target.elements.email.value, e.target.elements.password.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email != '' && password != '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit != false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
      <div className={css(loginStyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit} >
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" className={loginStyles.inputs} value={email} onChange={handleChangeEmail} />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" className={loginStyles.inputs} value={password} onChange={handleChangePassword} />
          <input type="submit" value="Ok" disabled={!enableSubmit}/>
        </form>
      </div>
    </React.Fragment>
  )
}

const loginStyles = StyleSheet.create({
	appBody: {
    padding: '36px 24px',
		'@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column'
    }
	},

	inputs: {
		margin: '0 16px 0 8px'
	}
})

Login.propTypes = {
  logIn: PropTypes.func
};

export default Login;
