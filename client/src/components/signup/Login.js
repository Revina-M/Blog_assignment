import React from 'react';

function Login(props) {
    return (
        <div>
            <div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
        </div>
    );
}

export default Login;