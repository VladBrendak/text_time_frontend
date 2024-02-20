import React, { useState } from "react";
import { User } from "../../interfaces/User";
import UserService from "../../services/UserService";

const Register: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    user.email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/.test(
      user.password
    );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setEmailError("");
    setConfirmPasswordError("");

    if (user.password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else if (!isEmailValid) {
      setEmailError("Invalid email");
    } else if (!isPasswordValid) {
      console.log("Password value:", user.password);
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&.)"
      );
    } else {
      console.log("Registration successful", user);
      UserService.createUser(user);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      {emailError && <p>{emailError}</p>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
      {passwordError && <p>{passwordError}</p>}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {confirmPasswordError && <p>{confirmPasswordError}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
