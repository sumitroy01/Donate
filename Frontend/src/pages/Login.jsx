// import React, { useState } from 'react';
// import { DotLottiePlayer } from '@dotlottie/react-player';
// import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
// import userstore from '../store/userstore';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   // ✅ allow login with email OR phone
//   const [form, setForm] = useState({ email: '', phone: '', password: '' });

//   const { logIn, isLogginIn } = userstore();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ require either email OR phone + password
//     if ((!form.email && !form.phone) || !form.password) {
//       toast.error('Please enter email/phone and password.');
//       return;
//     }

//     try {
//       const success = await logIn(form); // your store handles API call
//       if (success) {
//         toast.success('Login successful!');
//         navigate('/');
//       } else {
//         toast.error('Login failed');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Login failed');
//     }
//   };

//   return (
//     <div className="h-screen w-full bg-gradient-to-br from-green-800 to-blue-200 flex items-center justify-center font-sans">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
//         {/* Animation */}
//         <div className="hidden md:block">
//           <DotLottiePlayer
//             src="https://lottie.host/f888497d-fcf5-4877-ad67-1b971f53c23a/lRb4oS72ex.lottie"
//             loop
//             autoplay
//             className="h-[400px] w-[400px]"
//           />
//         </div>

//         {/* Form */}
//         <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 w-[350px] shadow-2xl border border-white/20">
//           <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

//           {/* ✅ Email (optional) */}
//           <input
//             type="email"
//             placeholder="Email (optional)"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full mb-4 px-4 py-2 rounded-lg text-black placeholder-gray-600 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
//           />

//           {/* ✅ Phone (optional) */}
//           <input
//             type="tel"
//             placeholder="Phone (optional)"
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             className="w-full mb-4 px-4 py-2 rounded-lg text-black placeholder-gray-600 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
//           />

//           {/* Password */}
//           <div className="relative mb-4">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               className="w-full px-4 py-2 pr-10 rounded-lg text-black placeholder-gray-600 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
//             />
//             <span
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
//             </span>
//           </div>

//           {/* Submit */}
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition mb-4 shadow-md"
//             disabled={isLogginIn}
//           >
//             {isLogginIn ? 'Logging in...' : 'Login'}
//           </button>

//        </div>

        
//       </div>
//     </div>
//   );
// };

// export default Login;




// // import React, { useState } from 'react';
// // import { DotLottiePlayer } from '@dotlottie/react-player';
// // import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
// // import userstore from '../store/userstore';
// // import toast from 'react-hot-toast';
// // import { useNavigate } from 'react-router-dom'; // ✅

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [form, setForm] = useState({ email: '', password: '' });

// //   const { logIn, isLogginIn } = userstore();
// //   const navigate = useNavigate(); // ✅

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!form.email || !form.password) {
// //       toast.error('Please fill in both fields.');
// //       return;
// //     }

// //     try {
// //       const success = await logIn(form); // ✅ Await your store function
// //       if (success) {
// //         toast.success("Login successful!");
// //         navigate("/"); // ✅ Redirect
// //       } else {
// //         toast.error("Login failed");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Login failed");
// //     }
// //   };

// //   return (
// //     <div className="h-screen w-full bg-gradient-to-br from-green-800 to-blue-200 flex items-center justify-center font-sans">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
// //         <div className="hidden md:block">
// //           <DotLottiePlayer
// //             src="https://lottie.host/f888497d-fcf5-4877-ad67-1b971f53c23a/lRb4oS72ex.lottie"
// //             loop
// //             autoplay
// //             className="h-[400px] w-[400px]"
// //           />
// //         </div>

// //         <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 w-[350px] shadow-2xl border border-white/20">
// //           <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={form.email}
// //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// //             className="w-full mb-4 px-4 py-2 rounded-lg text-black placeholder-gray-600 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
// //           />

// //           <div className="relative mb-4">
// //             <input
// //               type={showPassword ? 'text' : 'password'}
// //               placeholder="Password"
// //               value={form.password}
// //               onChange={(e) => setForm({ ...form, password: e.target.value })}
// //               className="w-full px-4 py-2 pr-10 rounded-lg text-black placeholder-gray-600 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
// //             />
// //             <span
// //               className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
// //               onClick={() => setShowPassword(!showPassword)}
// //             >
// //               {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
// //             </span>
// //           </div>

// //           <button
// //             onClick={handleSubmit}
// //             className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition mb-4 shadow-md"
// //             disabled={isLogginIn}
// //           >
// //             {isLogginIn ? 'Logging in...' : 'Login'}
// //           </button>

// //           <div className="flex items-center w-full my-3 text-white">
// //             <div className="flex-grow h-px bg-white/40"></div>
// //             <span className="mx-2 text-sm">or</span>
// //             <div className="flex-grow h-px bg-white/40"></div>
// //           </div>

// //           <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-100 transition mb-3 shadow">
// //             <FaGoogle className="text-red-500" />
// //             Login with Google
// //           </button>

// //           <button className="w-full flex items-center justify-center gap-3 bg-black text-white font-medium py-2 rounded-lg hover:bg-gray-900 transition shadow">
// //             <FaGithub />
// //             Login with GitHub
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from "react";
// import { DotLottiePlayer } from "@dotlottie/react-player";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import userstore from "../store/userstore";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });

//   const { logIn, isLogginIn } = userstore();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       toast.error("Please enter email and password.");
//       return;
//     }

//     try {
//       const success = await logIn(form);
//       if (success) {
//         toast.success("Login successful!");
//         navigate("/");
//       }
//     } catch (error) {
//       console.error("Login error:", error);

//       if (error.response?.status === 403) {
//         toast.error("Your account is not verified. Please check your email for OTP.");
//       } else if (error.response?.status === 401) {
//         toast.error("Invalid email or password.");
//       } else {
//         toast.error("Login failed. Try again.");
//       }
//     }
//   };

//   return (
//     <div className="h-screen w-full bg-gradient-to-br from-green-800 to-blue-200 flex items-center justify-center font-sans">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4">
//         {/* Animation */}
//         <div className="hidden md:block">
//           <DotLottiePlayer
//             src="https://lottie.host/f888497d-fcf5-4877-ad67-1b971f53c23a/lRb4oS72ex.lottie"
//             loop
//             autoplay
//             className="h-[400px] w-[400px]"
//           />
//         </div>

//         {/* Form */}
//         <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 w-[350px] shadow-2xl border border-white/20">
//           <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full mb-4 px-4 py-2 rounded-lg text-black placeholder-gray-600 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
//           />

//           {/* Password */}
//           <div className="relative mb-4">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               className="w-full px-4 py-2 pr-10 rounded-lg text-black placeholder-gray-600 bg-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
//             />
//             <span
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
//             </span>
//           </div>

//           {/* Submit */}
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition mb-4 shadow-md"
//             disabled={isLogginIn}
//           >
//             {isLogginIn ? "Logging in..." : "Login"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import userStore from "../store/userstore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const { logIn, isLogginIn } = userStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please enter both email and password");
      return;
    }

    const success = await logIn(form);
    if (success) {
      navigate("/"); // redirect to home/dashboard after login
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-blue-400">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            disabled={isLogginIn}
            className={`w-full py-2 rounded-lg transition ${
              isLogginIn
                ? "bg-blue-300 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isLogginIn ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* ✅ Forgot Password link */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import userStore from "../store/userstore";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const { logIn, isLogginIn } = userStore();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       toast.error("Please enter both email and password");
//       return;
//     }

//     const success = await logIn(form);
//     if (success) {
//       navigate("/"); // redirect to home/dashboard after login
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-blue-400">
//       <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <span
//               className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </span>
//           </div>

//           <button
//             type="submit"
//             disabled={isLogginIn}
//             className={`w-full py-2 rounded-lg transition ${
//               isLogginIn
//                 ? "bg-blue-300 cursor-not-allowed text-white"
//                 : "bg-blue-600 hover:bg-blue-700 text-white"
//             }`}
//           >
//             {isLogginIn ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
