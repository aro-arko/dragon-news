import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const location = useLocation();
  console.log(location);
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          console.log("User signed in successfully!");

          navigate(location?.state ? location.state : "/");

          e.target.reset();
        } else {
          console.log("User signed in unsuccessfully!");
        }
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-14">
        <h3 className="text-3xl font-medium text-center">Please Login</h3>

        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Do not have an account?
          <Link to="/register" className="font-bold text-blue-600">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
