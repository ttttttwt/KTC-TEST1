import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaExclamationCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import UserContext from "../contexts/UserProvider";

interface FormData {
  name: string;
  email: string;
  age: number;
}

const UserForm: React.FC = () => {
  const users = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = (data: FormData) => {
    users?.addUser({
      name: data.name,
      email: data.email,
      age: data.age,
    });
    reset();
  };

  return (
    <div className="bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
          User Registration
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <FaUser className="mr-2 text-gray-500" />
              Full Name *
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters",
                },
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <FaExclamationCircle className="mr-1" />
                {errors.name.message}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <FaEnvelope className="mr-2 text-gray-500" />
              Email *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: (value) => isValidEmail(value) || "Invalid email",
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <FaExclamationCircle className="mr-1" />
                {errors.email.message}
              </div>
            )}
          </div>

          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-2">
              <FaCalendarAlt className="mr-2 text-gray-500" />
              Age
            </label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                validate: (value) => {
                  if (value < 0) {
                    console.log("Age must be positive");
                    return "Age must be positive";
                  }
                },
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.age ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your age"
            />
            {errors.age && (
              <div className="flex items-center mt-1 text-red-500 text-sm">
                <FaExclamationCircle className="mr-1" />
                {errors.age.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
