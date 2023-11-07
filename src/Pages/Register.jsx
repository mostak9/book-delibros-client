import { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import img from "../assets/register.png";
import logoLight from "../assets/logo_light.png";
import logoDark from "../assets/logo_dark.png";
import SoicalLogin from "../components/SoicalLogin";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [dark, setDark] = useState(null);
  const [passError, setPassError] = useState("");
  const {createUser, userUpdate} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const theme = localStorage.getItem("dark");
    const doc = document.documentElement;
    if (theme === "true") {
      doc.setAttribute("data-theme", "dark");
      setDark(true);
    } else {
      doc.setAttribute("data-theme", "light");
      setDark(false);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setPassError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPassError("Password must contain at least one Uppercase character");
      return;
    }
    else if(!/\d+/.test(password)){
      setPassError("Password must contain at least one number");
      return;
    } 
    else if (!/[.*+?^${}()|[\]\\]/.test(password)) {
      setPassError(
        "Password must contain at least one special(@, #, &) character"
      );
      return;
    }
    createUser(email, password)
      .then(() => {
        userUpdate(name, photo)
          .then()
          .catch();
        swal("Successful!", "You registered successfully!", "success");
        navigate(location.state || '/');
        event.target.reset();
        setPassError("");

      })
      .catch((err) => {
        console.log(err);
        // swal("Failed!", "User already exist!", "error");
      });

  };

  return (
    <div className="mt-10">
      <div className="max-w-5xl min-h-[250px] m-auto shadow-2xl px-10 py-16 lg:flex flex-row-reverse items-center justify-between">
        <div>
          <img
            src={dark ? logoLight : logoDark}
            className="w-60 mx-auto mb-6"
            alt=""
          />
          <img src={img} className="w-2/3 mx-auto" alt="" />
          <h1 className="text-4xl font-bold mt-9 text-center">Register</h1>
        </div>
        <div className="lg:w-1/3">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              {/* name field */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 ">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 "
                    required
                    aria-describedby="email-error"
                    placeholder="Name"
                  />
                </div>
              </div>
              {/* photo field */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 ">
                  Photo link
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="photo"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 "
                    required
                    aria-describedby="email-error"
                    placeholder="Photo"
                  />
                </div>
              </div>
              {/* email field */}
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
                    className="py-3 px-4 block border w-full border-gray-200 rounded-md  focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
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
                  {passError}
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-block bg-primary-color text-white hover:text-primary-color"
              >
                Register
              </button>
            </div>
          </form>
          <SoicalLogin />
          <div className="text-center">
            <p className="mt-2 text-sm ">
              Already have an account?
              <Link
                to={"/login"}
                className="btn-link decoration-2 hover:underline font-medium"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
