import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import fb from '../../assets/icons/fbIcon.svg';
import lk from '../../assets/icons/lkIcon.svg';
import gg from '../../assets/icons/ggIcon.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then(res => {
        console.log(res.user);
        updateUser(name)
          .then(() => {
            toast.success('User created successfully!');
            navigate('/');
          })
          .catch(err => toast.error(err.message));
      })
      .catch(err => {
        // console.log(err.message);
        toast.error(err.message);
      });

    // window.location.reload();
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
              <h1 className="text-4xl text-center font-semibold">Register</h1>
              <form onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    value="Register"
                  />
                </div>
              </form>
              <div className="text-center mt-7 space-y-4">
                <p>Or Sign Up with</p>
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
                Already have an account?{' '}
                <Link to="/login" className="text-[#FF3811] font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
