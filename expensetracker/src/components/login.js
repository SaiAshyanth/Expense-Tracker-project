// import React, { Component } from 'react';

// class login extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>ASHYANTH</h1>
//             </div>
//         );
//     }
// }

// export default login;
// import React, { Component } from 'react';
// import './login.css'
// class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             password: '',
//             errorMessage: '',
//         };
//     }

//     handleInputChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value,
//             errorMessage: '',
//         });
//     };

//     validateLogin = () => {
//         const { username, password } = this.state;

//         if (username.trim() === '' || password.trim() === '') {
//             this.setState({
//                 errorMessage: 'Username and password are required.',
//             });
//         } else if (username.trim() === 'ashyanth' || password.trim() === '434'){
//             // Perform login logic (add your login logic here)
//             // For simplicity, this example just displays a success message
//             alert('Login successful!');
//         }
//     };

//     render() {
//         const { username, password, errorMessage } = this.state;

//         return (
//             <div className="container">
//                 <form id="loginForm">
//                     <h2>LOGIN</h2>
//                     <label htmlFor="username">USERNAME</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <label htmlFor="password">PASSWORD</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={password}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <button type="button" onClick={this.validateLogin}>
//                         Login
//                     </button>
//                     <p id="error-message">{errorMessage}</p>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Login;
// import React, { Component } from 'react';
// import './login.css';
// import { useNavigate } from 'react-router-dom';

// class Login extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             password: '',
//             errorMessage: '',
//         };
//     }

//     handleInputChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value,
//             errorMessage: '',
//         });
//     };

//     validateLogin = () => {
//         const { username, password } = this.state;
//         const navigate=useNavigate();
//         if (username.trim() === '' && password.trim() === '') {
//             alert('Credentials Required!');
//         } else if (username.trim() === 'ashyanth' && password.trim() === '434') {
//             alert('Login successful!');
            
//         } else {
//            alert('Username or Password is wrong');
//         }
//     };

//     render() {
//         const { username, password, errorMessage } = this.state;

//         return (
//             <div className="container">
//                 <form id="loginForm">
//                     <h2>LOGIN</h2>
//                     <label htmlFor="username">USERNAME</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <label htmlFor="password">PASSWORD</label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={password}
//                         onChange={this.handleInputChange}
//                         required
//                     />
//                     <button type="button" onClick={this.validateLogin}>
//                         Login
//                     </button>
//                     <p id="error-message">{errorMessage}</p>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Login;
// Login.js
// Login.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        setErrorMessage('');
    };

    const validateLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            alert('Credentials Required!');
        } else if (username.trim() === 'ashyanth' && password.trim() === '434') {
            alert("Login Successful");
            setIsLoggedIn(true);
        } else {
            alert('Username or Password is wrong');
        }
    };

    if (isLoggedIn) {
        return <Navigate to="/tracker" />;
    }

    return (
        <div className="container1">
            <form id="loginForm">
                <h2>LOGIN</h2>
                <label htmlFor="username">USERNAME</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="password">PASSWORD</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                />
                <button type="button" onClick={validateLogin}>
                    Login
                </button>
                <p id="error-message">{errorMessage}</p>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;

