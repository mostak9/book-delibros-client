import { NavLink } from "react-router-dom";
import LogoLight from '../assets/logo_light.png'
import LogoDark from '../assets/logo_dark.png'
import { useContext } from "react";
import { ThemeContext } from "../Layout/MainLayout";
import {CiLight, CiDark} from 'react-icons/ci'
import {BiSolidLogInCircle} from 'react-icons/bi'

const Navbar = () => {
    const {isDark, handleTheme} = useContext(ThemeContext);
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-primary-color  sm:py-4 dark:text-primary-color"
              : "font-medium text-gray-800 hover:text-gray-500 sm:py-4 dark:text-gray-200 dark:hover:text-gray-400"
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
              ? "font-medium text-primary-color  sm:py-4 dark:text-primary-color"
              : "font-medium text-gray-800 hover:text-gray-500 sm:py-4 dark:text-gray-200 dark:hover:text-gray-400"
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
              ? "font-medium text-primary-color  sm:py-4 dark:text-primary-color"
              : "font-medium text-gray-800 hover:text-gray-500 sm:py-4 dark:text-gray-200 dark:hover:text-gray-400"
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
              ? "font-medium text-primary-color  sm:py-4 dark:text-primary-color"
              : "font-medium text-gray-800 hover:text-gray-500 sm:py-4 dark:text-gray-200 dark:hover:text-gray-400"
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div>
      <div className="pb-5 px-5 md:px-10 pt-4 flex justify-end items-center border-b-2 border-b-neutral-500">
        <div className="flex items-center gap-10">
            <button className="btn  btn-circle btn-outline text-2xl" onClick={() => handleTheme(!isDark)}>{isDark ?  <CiLight/>: <CiDark/>}</button>
            <div>
                <button className="btn btn-outline border-primary-color border-2 hover:bg-primary-color hover:border-primary-color  text-primary-color hover:text-neutral-50"><BiSolidLogInCircle className="text-xl"/> Sign In</button>
            </div>
        </div>
      </div>

      <div className="navbar">
        
        <div className="lg:navbar-start w-full flex justify-between">
        <a className="btn btn-ghost normal-case text-xl"><img src={isDark ? LogoLight : LogoDark} className="w-full h-full object-fill" alt="" /></a>
          <div className="dropdown dropdown-end">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
