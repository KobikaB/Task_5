import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setPasswordError("");

    let isValid = true;

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      toast.error("No user registered!");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password too short, not submitted");
      isValid = false;
    }

    if (
      isValid &&
      (formData.name !== storedData.Fname ||
        formData.password !== storedData.password)
    ) {
      toast.error("Invalid credentials!");
      return;
    }

    if (isValid) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-3  mt-4"
          >
            <>
              <label className="block">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                pattern="[A-Za-z]+"
                title="Only letters allowed"
                className="p-2 block border-2 rounded w-full"
                required
              />
            </>

            <>
              <label className="block">Password</label>
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
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('./src/Images/i5.jpg')" }}
      ></div>

      <ToastContainer />
    </div>
  );
};

export default Login;
