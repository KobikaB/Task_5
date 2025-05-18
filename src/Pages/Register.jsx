import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const navigate = useNavigate(); // Redirect
  const [formData, setFormData] = useState({
    Fname: "",
    Sname: "",
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
      toast.error("Passwords do not match!");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));

    toast.success("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div
        className="hidden md:block md:w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('./src/Images/i5.avif')" }}
      >
        <h1 className="text-white font-bold text-3xl text-center mt-40">
          Welcome
        </h1>
        <p className="text-white text-center mx-20 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          commodi vitae, unde incidunt eligendi ex libero atque exercitationem
          optio aut voluptate sapiente, cupiditate nostrum, maiores modi nam
          dignissimos quos dolor.
        </p>
      </div>

      <div className="w-full md:w-1/2 h-full bg-gray-400 flex justify-center items-center bg-cover bg-center">
        <div className="bg-white w-7/12 md:w-8/12 lg:w-9/12  p-6 rounded-3xl shadow h-auto max-h-full">
          <h2 className="text-3xl font-bold text-center mt-4">Register</h2>
          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3 mt-10 w-full">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  name="Fname"
                  placeholder="Firstname"
                  value={formData.Fname}
                  onChange={handleChange}
                  pattern="[A-Za-z]+"
                  title="Only letters allowed"
                  className="p-2 border-2 rounded block w-full"
                  required
                />
                <input
                  type="text"
                  name="Sname"
                  placeholder="Surname"
                  value={formData.Sname}
                  pattern="[A-Za-z]+"
                  title="Only letters allowed"
                  onChange={handleChange}
                  className="p-2 border-2 rounded block w-full"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border-2 rounded block w-full"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                onChange={handleChange}
                className="p-2 border-2 rounded block  w-full"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                onChange={handleChange}
                className="p-2 border-2 rounded block  w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-400"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
