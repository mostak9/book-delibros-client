import { Link, NavLink } from "react-router-dom";
import LogoLight from "../assets/logo_light.png";
import LogoDark from "../assets/logo_dark.png";
import { useContext } from "react";
import { ThemeContext } from "../Layout/MainLayout";
import { CiLight, CiDark } from "react-icons/ci";
import { BiSolidLogInCircle, BiSolidLogOutCircle } from "react-icons/bi";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { isDark, handleTheme } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-primary-color  sm:py-2 dark:text-primary-color"
              : "font-medium hover:text-gray-500 sm:py-2  dark:hover:text-gray-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/addBook"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-primary-color  sm:py-2 dark:text-primary-color"
              : "font-medium  hover:text-gray-500 sm:py-2  dark:hover:text-gray-400"
          }
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allBooks"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-primary-color  sm:py-2 dark:text-primary-color"
              : "font-medium t hover:text-gray-500 sm:py-2  dark:hover:text-gray-400"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/borrowedBooks"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-primary-color  sm:py-2 dark:text-primary-color"
              : "font-medium hover:text-gray-500 sm:py-2  dark:hover:text-gray-400"
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut().then().catch();
  };

  return (
    <div className="bg-base-100">
      <div>
        <div className="pb-5 px-2 md:px-10 pt-4 flex justify-between items-center border-b-2 border-b-neutral-500">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img
              src={isDark ? LogoLight : LogoDark}
              className="w-36 md:w-52"
              alt=""
            />
          </Link>
          <div className="flex items-center gap-10">
            <button
              className="btn btn-sm btn-circle btn-outline text-2xl"
              onClick={() => handleTheme(!isDark)}
            >
              {isDark ? <CiLight /> : <CiDark />}
            </button>
            <div>
              {user ? (
                <div className="flex flex-col items-center">
                  <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                    
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2"
                  >
                    <li>
                      <a className="justify-between">
                        {user.displayName}
                        <span className="badge">New</span>
                      </a>
                    </li>
                    
                    <li>
                      <button
                        onClick={handleLogout}
                        className="btn btn-sm btn-outline border-primary-color border-2 hover:bg-primary-color hover:border-primary-color  text-primary-color hover:text-neutral-50"
                      >
                        <BiSolidLogOutCircle className="text-xl" /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="font-bold mt-2 text-xs">
                {user.displayName}
              </div>
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="btn btn-sm btn-outline border-primary-color border-2 hover:bg-primary-color hover:border-primary-color  text-primary-color hover:text-neutral-50"
                >
                  <BiSolidLogInCircle className="text-xl" /> Login
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="navbar">
          <div className="lg:navbar-start w-full flex justify-between">
            {/* <a className="btn btn-ghost normal-case text-xl"><img src={isDark ? LogoLight : LogoDark} className="w-full h-full object-fill" alt="" /></a> */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
