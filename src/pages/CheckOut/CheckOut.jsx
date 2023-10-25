import { useLoaderData } from 'react-router-dom';
import bannerImg from '../../assets/images/checkout/checkout.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);
  //   console.log(user?.displayName, user?.email);

  const handleBookService = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      customerName: name,
      date,
      email,
      service: _id,
      price: price,
    };
    console.log(order);
  };

  return (
    <div>
      <div>
        <div
          className="hero rounded-lg"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          <div className="hero-content text-white">
            <div className="min-h-[200px] relative flex flex-col items-center">
              <h1 className="mt-14 text-4xl font-bold">
                Book Service: {title}
              </h1>
              <button className="absolute -bottom-4 bg-[#FF3811] py-4 px-16">
                Home/Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F3F3] my-20 rounded-lg">
        <form onSubmit={handleBookService} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                readOnly
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount Due</span>
              </label>
              <input
                type="text"
                readOnly
                defaultValue={'$' + price}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-error bg-[#FF3811] text-white capitalize"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
