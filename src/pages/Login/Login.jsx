import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import fb from '../../assets/icons/fbIcon.svg';
import lk from '../../assets/icons/lkIcon.svg';
import gg from '../../assets/icons/ggIcon.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        toast.success('Logged in successfully!');

        // GET JWT ACCESS TOKEN
        // const loggedInUser = { email };
        // axios
        //   .post('https://car-doctor-server-umber-psi.vercel.app/jwt', loggedInUser, {
        //     withCredentials: true,
        //   })
        //   .then(res => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : '/');
        //     }
        //   })
        //   .catch(err => toast.error(err.message));

        // GET JWT ACCESS TOKEN AGAIN
        const user = { email };
        axios
          .post('https://car-doctor-server-umber-psi.vercel.app/jwt', user, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : '/');
            }
          });
      })
      .catch(err => {
        // console.log(err.message);
        toast.error(err.message);
      });
  };
  return (
    <div className="my-20">
      <div className="hero">
        <div className="hero-content lg:gap-52 flex-col lg:flex-row">
          <div className="w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-12 px-8">
            <div className="card-body">
              <h1 className="text-4xl text-center font-semibold">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
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
                  <input
                    className="btn btn-error bg-[#FF3811] text-white capitalize"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div className="text-center mt-7 space-y-4">
                <p>Or Sign In with</p>
                <div className="flex gap-3 justify-center">
                  <button className="btn btn-circle">
                    <img src={fb} alt="" />
                  </button>
                  <button className="btn btn-circle">
                    <img src={lk} alt="" />
                  </button>
                  <button className="btn btn-circle">
                    <img src={gg} alt="" />
                  </button>
                </div>
              </div>
              <p className="mt-4 text-center">
                New to Car Doctor?{' '}
                <Link to="/register" className="text-[#FF3811] font-bold">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
