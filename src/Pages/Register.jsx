import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 h-full bg-gray-100 flex justify-center items-center">
        <div className="bg-white w-120 h-110 p-3 rounded-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">Register</h2>
          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3 justify-center items-center mt-10">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="p-2 w-80 border-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border-2 w-80 rounded"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border-2 w-80 rounded"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border-2 w-80 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 w-30  rounded hover:bg-blue-400"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:text-blue-950">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('./src/Images/i1.avif')" }}
      ></div>
    </div>
  );
};

export default Register;
