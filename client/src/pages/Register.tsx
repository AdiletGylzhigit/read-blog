import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type Props = {};

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Register = ({}: Props) => {
  const [inputs, setInputs] = useState<Inputs>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.SyntheticEvent): void => {
    let target = e.target as HTMLInputElement;
    setInputs((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/auth/register`, inputs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>SIGN UP</button>
        <p>This is an error!</p>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
