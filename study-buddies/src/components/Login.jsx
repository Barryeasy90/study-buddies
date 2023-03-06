import { useState } from "react";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email:</label>
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
      </form>
      <button>Forgot Password?</button>
    </div>
  );
}

export default Login