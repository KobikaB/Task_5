import React, { useState, useRef } from "react";
import avatar1 from "../images/avatar1.avif";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") validateEmail(value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSave = () => {
    if (emailError) return;
    setProfile(formData);
    setEditMode(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
        setProfile((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-8 border-b pb-6">
          <div
            className="relative group cursor-pointer"
            onClick={handleAvatarClick}
          >
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-36 h-36 rounded-full object-cover border-4 border-amber-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-sm font-semibold">Change</span>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>

          <div className="flex-1">
            {!editMode ? (
              <>
                <h2 className="text-3xl font-bold text-gray-800">
                  {profile.name}
                </h2>
                <p className="text-gray-500 text-lg mt-1">{profile.email}</p>
                <div className="flex gap-4 mt-5">
                  <button
                    onClick={() => setEditMode(true)}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-md shadow"
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md shadow"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Email"
                />
                {emailError && (
                  <p className="text-red-600 text-sm">{emailError}</p>
                )}
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-md shadow"
                    disabled={!!emailError}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-md shadow"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
