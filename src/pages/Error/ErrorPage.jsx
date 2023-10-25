import { Link } from 'react-router-dom';
import img from '../../assets/images/errorImg.png';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen text-center flex flex-col justify-center items-center gap-6">
      <img src={img} alt="" />
      <Link
        to="/"
        className="text-2xl font-bold text-[#FF3811] border-4 border-[#FF3811] px-4 py-2 rounded-xl flex items-center gap-4"
      >
        <FaArrowLeft></FaArrowLeft> Go Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
