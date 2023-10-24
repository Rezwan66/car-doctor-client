import timetable from '../../assets/icons/timetable.svg';
import callUs from '../../assets/icons/callUs.svg';
import location from '../../assets/icons/location.svg';

const Contact = () => {
  return (
    <div className="my-20 bg-[#151515] text-white py-20 px-16 rounded-lg">
      <div className="flex items-center justify-between flex-col gap-10 md:flex-row">
        <div className="flex items-center gap-5">
          <img src={timetable} alt="" />
          <div>
            <p>We are open monday-friday</p>
            <h3 className="text-2xl font-bold mt-2">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={callUs} alt="" />
          <div>
            <p>Have a question?</p>
            <h3 className="text-2xl font-bold mt-2">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={location} alt="" />
          <div>
            <p>Need a repair? our address</p>
            <h3 className="text-2xl font-bold mt-2">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
