import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img1 from '../../assets/images/team/1.jpg';
import img2 from '../../assets/images/team/2.jpg';
import img3 from '../../assets/images/team/3.jpg';

const OurTeam = () => {
  const employees = [
    {
      id: 1,
      name: 'John Smith',
      photo: img1,
      role: 'Engine Expert',
    },
    {
      id: 2,
      name: 'Walter White',
      photo: img2,
      role: 'Brake Specialist',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      photo: img3,
      role: 'Transmission Technician',
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center max-w-[700px] mx-auto">
        <h3 className="text-xl font-bold text-[#FF3811]">Team</h3>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="py-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map(e => (
            <div key={e.id}>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-7 pt-7">
                  <img
                    src={e.photo}
                    alt="service image"
                    className="rounded-xl w-full h-72"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-2xl font-bold">{e.name}</h2>
                  <div className="text-center mb-2 text-[#FF3811]">
                    <p className="text-lg font-semibold italic">{e.role}</p>
                    <div className="flex items-center justify-center mt-6 gap-4 text-3xl">
                      <button className="text-[#395185]">
                        <FaFacebook></FaFacebook>
                      </button>
                      <button className="text-[#55ACEE]">
                        <FaTwitter></FaTwitter>
                      </button>
                      <button className="text-[#0A66C2]">
                        <FaLinkedin></FaLinkedin>
                      </button>
                      <button className="text-[#D8447A]">
                        <FaInstagram></FaInstagram>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
