import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
	return (
		<div>
			<h1>Login</h1>
			<button type='button'>Login</button>
			<Link to='/register'>Register</Link>
		</div>
	)
}
