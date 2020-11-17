import React, {useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = (props) => {
       const [login, setLogin] = useState({
        username: '',
        password: '',

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', login)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push('/bubbles')
        })
        .catch(err => console.log(`login axiosWithAuth failed: ${err.response}`))

    }

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value })
    }

    return (
        <div>
          <h2>Welcome to the Bubble App!</h2>
          <p>Login Here</p> 
          <form onSubmit={handleSubmit}>
              <input 
              name='username'
              type='text'
              value={props.username}
              onChange={handleChange}
              placeholder='username'
              className=''
              />
              <input 
              name='password'
              type='password'
              value={props.password}
              onChange={handleChange}
              placeholder='password'
              className=''
              />
              <button>Login</button>
          </form>
        </div>
    )
}

export default Login