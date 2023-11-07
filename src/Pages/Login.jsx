import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import img from "../assets/login.png";
import logoLight from '../assets/logo_light.png';
import logoDark from '../assets/logo_dark.png';
import SoicalLogin from "../components/SoicalLogin";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [dark, setDark] = useState(null)
  const [error, setError]  = useState('');
  const {logIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const theme = localStorage.getItem("dark");
    const doc = document.documentElement;
    if (theme === "true") {
      doc.setAttribute("data-theme", "dark");
      setDark(true)
    } else {
      doc.setAttribute("data-theme", "light");
      setDark(false)
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("⚠️password must be at least 6 characters");
      return;
    }
    logIn(email, password)
      .then(() => {
        swal("Success!", "Logged in successfully", "success");
        setError("");
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError("⚠️Invalid email or password");
      });
  }

  return (
    <div className="mt-10">
      <div className="max-w-5xl min-h-[250px] m-auto shadow-2xl px-10 py-16 lg:flex items-center justify-between">
        <div>
            <img src={dark ? logoLight: logoDark} className="w-60 mx-auto mb-6" alt="" />
          <img src={img} className="w-2/3 mx-auto" alt="" />
          <h1 className="text-4xl font-bold mt-9 text-center">Login</h1>
        </div>
        <div className="lg:w-1/3">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              {/* input field */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 ">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 "
                    required
                    aria-describedby="email-error"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* password field */}
              <div>
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm mb-2 ">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    name="password"
                    className="py-3 px-4 block border w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-400"
                    required
                    aria-describedby="password-error"
                    placeholder="Password"
                  />
                  <p
                    className="absolute cursor-pointer text-xl right-2 top-1/3"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </p>
                </div>
                <p
                          className="italic text-xs text-red-600 mt-2"
                          id="password-error"
                        >
                          {error}
                        </p>
              </div>

              <button
                type="submit"
                className="btn btn-block bg-primary-color text-white hover:text-primary-color"
              >
                Login
              </button>
            </div>
          </form>
          <SoicalLogin/>
          <div className="text-center">
                  <p className="mt-2 text-sm ">
                    Don't have an account yet?
                    <Link
                      to={"/register"}
                      className="btn-link decoration-2 hover:underline font-medium"
                    >
                      Register here
                    </Link>
                  </p>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
