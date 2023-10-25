import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="mt-20 lg:mb-36">
      <div className="hero">
        <div className="hero-content gap-36 flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src={person}
              className="w-[460px] h-[460px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute hidden lg:block top-1/2 left-[138px] w-[322px] h-2 bg-white"></div>
            <div className="absolute hidden lg:block top-1/2 left-[130px] w-2 h-[230px] bg-white"></div>
            <img
              src={parts}
              className="w-[330px] h-[330px] rounded-lg shadow-2xl absolute right-20 top-1/2 border-t-8 border-transparent"
            />
          </div>
          <div className="lg:w-1/2 pr-16">
            <h3 className="text-xl font-bold text-[#FF3811]">About Us</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="pt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="pb-6 pt-4">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don&apos;t look even slightly
              believable.
            </p>
            <button className="btn btn-error bg-[#FF3811] text-white capitalize">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
