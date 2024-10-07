import React, { useContext, useState } from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

function Navbar() {
  const { currentUser, logOut } = useContext(AuthContext);
  console.log("Current User= ", currentUser);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <div className="btn btn-ghost">
            <img className="w-14" src={logo} alt="Logo" />
            <div className="text-xl">Code Cloud</div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {currentUser ? (
          <div>
            <p></p>
            <img src="" alt="" />
            <div onClick={handleLogOut} className="btn btn-secondary">
              Log Out
            </div>
          </div>
        ) : (
          <Link to={"/login"} className="btn btn-secondary px-10 h-10">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
