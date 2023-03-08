import { useState } from "react";
import logo from "../images/cyf-logo.png"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="cyf-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* <div className="logo"></div> */}

      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="Email">Username or Email:</label>
        <input
          type="Email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="Password"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="Submit">Sign In</button>
        <button>Forgot Password</button>
      </form>
    </>
  );
}

export default Login;
