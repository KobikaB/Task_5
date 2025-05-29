import React, { useState } from "react";
import avatar1 from "../images/avatar1.avif";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "Jinora",
    email: "jinora@gmail.com",
    avatar: avatar1,
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [emailError, setEmailError] = useState("");

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

   
    if (name === "email") {
      const emailRegex = /^\S+@\S+\.\S+$/;
      setEmailError(emailRegex.test(value) ? "" : "Invalid email format");
    }
  };

  const handleSave = () => {
    if (!emailError) {
      setProfile(formData);
      setEditMode(false);
    }
  };

  
  const handleLogout = () => {
    navigate("/login");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = reader.result;
        setFormData({ ...formData, avatar: image });
        setProfile({ ...profile, avatar: image });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <div className="text-center">
          <img
            src={profile.avatar}
            alt="avatar"
            className="w-24 h-24 mx-auto rounded-full border-4 border-amber-500"
          />
          <label className="block mt-2 text-blue-600 cursor-pointer">
            Change Avatar
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
          </label>
        </div>

        {!editMode ? (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={() => setEditMode(true)}
                className="bg-amber-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border px-3 py-2 rounded"
              placeholder="Email"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
