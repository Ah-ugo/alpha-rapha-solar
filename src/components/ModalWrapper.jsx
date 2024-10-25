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

  const urls = [
    "https://alpha-rapha-solar-backend.vercel.app",
    "https://alpha-rapha-solar-backend.onrender.com/",
  ];

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
        await RegisterUser(new URLSearchParams(formData), urls);
        alert("Registered successfully!");
        toggleForm();
      } else {
        await LoginUser(
          new URLSearchParams({
            username: formData.username,
            password: formData.password,
          }),
          urls
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
                  maxHeight: "full",
                  overflowY: "scroll",
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
              {/* Form Fields */}
              {/* ... Form Fields Code Here ... */}

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
