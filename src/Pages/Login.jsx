import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError("");
    setPasswordError("");
    setSubmitted(false);

    let isValid = true;

    if (formData.name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (formData.password.length < 8) {
      setPasswordError("Password must be a minimum of 8 characters");
      toast.error("Password too short, not submitted");
      isValid = false;
    }

    if (isValid) {
      setSubmitted(true);
      toast.success("Login successful");

      localStorage.setItem("userData", JSON.stringify(formData));

      setTimeout(() => {
        navigate("/");
      }, [1500]);
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 bg-gray-300 flex justify-center items-center min-h-screen">
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md w-100"
          >
            <h1 className="text-center mt-5 text-2xl font-bold">Login</h1>
            <img
              src="/src/Images/avat.png"
              alt="logo"
              className="w-20 h-20 mx-auto"
            />

            <div className="pl-4 ml-3 flex flex-col justify-center">
              <label className="mb-5">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-white w-[80%] border-2 border-l-black h-12 pl-4"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {nameError && (
                <p className="text-red-600 text-sm mt-1">{nameError}</p>
              )}
            </div>

            <div className="pl-4 ml-3 flex flex-col justify-center">
              <label className="pb-5">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-white w-[80%] h-12 pl-4 border-2 border-l-black"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {passwordError && (
                <p className="text-red-600 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                className="p-3 mt-15 m-4 bg-gray-300 rounded-xl hover:bg-gray-500 text-cyan-900"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('./src/Images/i5.jpg')" }}
      ></div>

      <ToastContainer />
    </div>
  );
};

export default Login;
