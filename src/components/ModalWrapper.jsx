import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEdit3 } from "react-icons/fi";
import { LoginUser, RegisterUser } from "../utils/auth";

export default function ModalWrapper({ isOpen, onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({
      username: "",
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (isRegister && !formData.fullname)
      newErrors.fullname = "Full name is required.";
    if (isRegister && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (isRegister && formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      if (isRegister) {
        await RegisterUser(new URLSearchParams(formData));
        alert("Registered successfully!");
        toggleForm();
      } else {
        await LoginUser(
          new URLSearchParams({
            username: formData.username,
            password: formData.password,
          })
        );
        onClose();
      }
    } catch (err) {
      setErrors({ form: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      size={"lg"}
      isOpen={isOpen}
      onClose={onClose}
      shouldBlockScroll={false}
    >
      <ModalContent style={isRegister ? { marginTop: 300 } : null}>
        <ModalHeader className="text-center text-gray-800 font-bold text-2xl">
          {isRegister ? "Create an Account" : "Login"}
        </ModalHeader>
        <ModalBody
          style={
            isRegister
              ? {
                  maxHeight: "full", // Restrict the height to 90% of the viewport
                  overflowY: "scroll", // Enable scroll when content exceeds max height
                  scrollbarWidth: "none",
                }
              : null
          }
        >
          <div className="h-full flex justify-center pb-10">
            <form
              onSubmit={handleSubmit}
              className="bg-white px-10 pb-8 rounded-xl w-full max-w-md shadow-xl"
            >
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Username
                  </label>
                  <div className="flex items-center border-2 py-2 px-3 rounded-md">
                    <FiUser className="text-gray-400" size={20} />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="pl-2 outline-none border-none w-full"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.username}
                    </p>
                  )}
                </div>

                {isRegister && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name
                      </label>
                      <div className="flex items-center border-2 py-2 px-3 rounded-md">
                        <FiEdit3 className="text-gray-400" size={20} />
                        <input
                          type="text"
                          name="fullname"
                          value={formData.fullname}
                          onChange={handleInputChange}
                          className="pl-2 outline-none border-none w-full"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      {errors.fullname && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.fullname}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email
                      </label>
                      <div className="flex items-center border-2 py-2 px-3 rounded-md">
                        <FiMail className="text-gray-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-2 outline-none border-none w-full"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Password
                  </label>
                  <div className="flex items-center border-2 py-2 px-3 rounded-md">
                    <FiLock className="text-gray-400" size={20} />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-2 outline-none border-none w-full"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password}
                    </p>
                  )}
                </div>

                {isRegister && (
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Confirm Password
                    </label>
                    <div className="flex items-center border-2 py-2 px-3 rounded-md">
                      <FiLock className="text-gray-400" size={20} />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="pl-2 outline-none border-none w-full"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}

                {errors.form && (
                  <p className="text-red-500 text-center">{errors.form}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-gradient-to-tr from-blue-600 to-purple-500 text-white py-2 rounded-md text-lg font-semibold hover:to-red-700 transition duration-1000"
              >
                {loading
                  ? isRegister
                    ? "Registering..."
                    : "Logging in..."
                  : isRegister
                  ? "Register"
                  : "Login"}
              </button>

              <hr className="my-4" />

              <div className="flex justify-center items-center mt-4">
                <p className="text-gray-700 font-medium text-xs">
                  {isRegister
                    ? "Already have an account?"
                    : "Don’t have an account?"}
                  <button
                    onClick={toggleForm}
                    className="ml-2 text-blue-500 font-semibold"
                  >
                    {isRegister ? "Sign In" : "Register now"} →
                  </button>
                </p>
              </div>
            </form>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}