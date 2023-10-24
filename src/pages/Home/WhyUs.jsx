import img1 from '../../assets/icons/group.svg';
import img2 from '../../assets/icons/Group 38729.svg';
import img3 from '../../assets/icons/person.svg';
import img4 from '../../assets/icons/Wrench.svg';
import img5 from '../../assets/icons/check.svg';
import img6 from '../../assets/icons/deliveryt.svg';

const WhyUs = () => {
  const reasons = [
    {
      id: 1,
      photo: img1,
      reason: 'Expert Team',
    },
    {
      id: 2,
      photo: img2,
      reason: 'Timely Delivery',
    },
    {
      id: 3,
      photo: img3,
      reason: '24/7 Support',
    },
    {
      id: 4,
      photo: img4,
      reason: 'Best Equipment',
    },
    {
      id: 5,
      photo: img5,
      reason: '100% Guarantee',
    },
    {
      id: 6,
      photo: img6,
      reason: 'Timely Delivery',
    },
  ];

  return (
    <div className="my-20">
      <div className="text-center max-w-[700px] mx-auto">
        <h3 className="text-xl font-bold text-[#FF3811]">Core Features</h3>
        <h1 className="text-5xl font-bold">Why Choose Us</h1>
        <p className="py-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {reasons.map(r => (
          <div
            key={r.id}
            className="card card-compact bg-base-300 shadow-xl py-8"
          >
            <figure>
              <img src={r.photo} alt="reason photo" />
            </figure>
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">{r.reason}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
