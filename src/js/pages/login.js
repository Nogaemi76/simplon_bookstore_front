import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import api from '../utils/api';

const Login = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(null);

        const body = { email, password };

        // console.log("body", body);

        try {
          let result = await api.post("/users/authenticate", body);
          dispatch({ type: 'USER_SET', payload: result.data });
          history.push('/');
        } catch (err) {
          setErrors(err.response?.data?.message);
          dispatch({ type: 'USER_RESET' });
        }

        
    }

    return (
      <div>
        {
          errors && <p>{errors}</p>
        }
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input 
              name="userName"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="userPassword"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button>Se connecter</button>
        </form>
        {/* <div>{email}</div> */}
      </div>
    );
};

export default Login;