import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { currentUser, signup } = useContext(AuthContext);
  console.log("Current User= ", currentUser);

  const handleSignup = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    console.log(form);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signup({ email: email, password: password })
      .then((result) => {
        console.log(result.user);
        toast.success("User Signup Successful", {
          position: "top-right",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log("Signup error", error);
        console.error(error);
      });
  };
  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen p-10">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl justify-center text-center mt-10">
              Register Yourself
            </h1>
            <form className="card-body" onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  autoComplete="on"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="on"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  Sign Up
                </button>
                {/* <button
                type="submit"
                className="btn btn-outline btn-info rounded-none"
              >
                <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                  Login
                </span>
              </button> */}
              </div>

              <p className="text-center mt-5">
                <span>Alreadey have an account? </span>
                <span className="text-blue-500">
                  <Link to={"/login"}>Log In</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
