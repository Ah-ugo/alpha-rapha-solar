import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import React, { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi"; // Import icons from react-icons
import { LoginUser } from "../utils/auth";

export default function ModalWrapper({ children, isOpen, onOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new URLSearchParams();
      formData.append("username", username);
      formData.append("password", password);

      await LoginUser(formData);
      onClose();
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal size={"lg"} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2 text-center text-gray-800 font-bold text-2xl">
              Welcome Back
            </ModalHeader>
            <ModalBody>
              <div className="h-full flex items-center justify-center  py-10">
                <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
                  <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
                    Log in
                  </h2>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                      <FiUser
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500"
                        size={24}
                      />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="relative">
                      <FiLock
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500"
                        size={24}
                      />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                        placeholder="Password"
                        required
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-center">{error}</p>
                    )}
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200 w-full"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </form>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
