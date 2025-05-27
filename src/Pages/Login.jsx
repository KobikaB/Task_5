import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import bcrypt from "bcryptjs";

const Login = () => {
  const navigate = useNavigate();

  // const [nameError, setNameError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      toast.error("No user registered!");
      return;
    }

    const isEmailCorrect = formData.email === storedData.email;
    const isPasswordCorrect = bcrypt.compareSync(
      formData.password,
      storedData.password
    );

    if (!isEmailCorrect || !isPasswordCorrect) {
      toast.error("Invalid credentials");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password too short");
      isValid = false;
    }

    if (formData.email !== storedData.email) {
      toast.error("Invalid Email!");
      return;
    }

    if (!isEmailCorrect || !isPasswordCorrect) {
      toast.error("Invalid credentials");
      return;
    }

    toast.success("Login successful");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex ">
      <div className="w-full  md:w-1/2  flex items-center justify-center bg-gray-400 p-4 bg-cover bg-center">
        <div className="bg-white w-full max-w-md  p-4 rounded-3xl shadow-2xl">
          <h1 className="text-center text-2xl font-bold">Login</h1>
          <img
            src="/src/images/avat.png"
            alt="logo"
            className="w-20 h-20 mx-auto mt-2"
          />

          <form onSubmit={handleSubmit} className="flex flex-col  gap-3  mt-4">
            <>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border-2 rounded block w-full"
              />
            </>

            <>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special"
                className="p-2 border-2 rounded block w-full"
                value={formData.password}
                onChange={handleChange}
              />
            </>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-3 rounded hover:bg-blue-400 w-full max-w-[100px] "
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            If you don't have an account?
            <Link to="/register" className="text-blue-600 hover:underline ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>

      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center  "
        style={{ backgroundImage: "url('./src/Images/i4.jpeg')" }}
      ></div>

      <ToastContainer />
    </div>
  );
};

export default Login;
