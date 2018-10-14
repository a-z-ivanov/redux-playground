import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = ({ requestLogin }) => {
    return <div>
        <button onClick={requestLogin}>Login</button>
    </div>
};

const mapDispathToProps = (dispatch) => ({
    requestLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispathToProps)(Login);