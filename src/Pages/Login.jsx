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

    let isValid = true;

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      toast.error("No user registered!");
      return;
    }

    if (formData.name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (formData.password.length < 8) {
      setPasswordError("Password must be a minimum of 8 characters");
      toast.error("Password too short, not submitted");
      isValid = false;
    }

    if (
      isValid &&
      (formData.name !== storedData.Fname ||
        formData.password !== storedData.password)
    ) {
      toast.error("No user registered!");
      return;
    }

    if (isValid) {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful");

      setTimeout(() => {
        navigate("/");
      }, [1500]);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col  md:flex-row ">
      <div className="w-full md:w-1/2 h-full bg-gray-400 flex justify-center items-center bg-cover bg-center">
        <div className="bg-white w-7/12 md:w-6/12  p-6 rounded-3xl shadow-2xl h-auto max-h-full">
          <h1 className="text-center  text-2xl font-bold">Login</h1>
          <img
            src="/src/Images/avat.png"
            alt="logo"
            className="w-20 h-20 mx-auto mt-1"
          />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3"
          >
            <label className="block  w-full">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              pattern="[A-Za-z]+"
              title="Only letters allowed"
              className="p-2 border-2  rounded block w-full "
              required
            />

            {nameError && (
                <p className="text-red-600 text-sm mt-1">{nameError}</p>
              )}

            <label className="block w-full">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
              className="p-2 border-2 rounded block w-full"
              value={formData.password}
              onChange={handleChange}
            />

            {passwordError && (
                <p className="text-red-600 text-sm mt-1">{passwordError}</p>
              )}

            <div className="flex justify-center ">
              <button
                className="p-3 my-2 bg-gray-300 rounded-xl hover:bg-gray-500 text-cyan-900"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p className=" text-center ">
            If you don't have an account?
            <Link to="/register" className="text-blue-600 hover:underline ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>

      <div
        className="hidden md:block md:w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('./src/Images/i5.jpg')" }}
      ></div>

      <ToastContainer />
    </div>
  );
};

export default Login;
