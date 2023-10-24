import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Products = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  //   console.log('services', services);
  return (
    <div className="my-20">
      <div className="text-center max-w-[700px] mx-auto">
        <h3 className="text-xl font-bold text-[#FF3811]">Popular Products</h3>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="pt-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div>
        <p className="text-right italic text-[#FF3811] pt-6">
          showing {services.length} services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div key={service._id}>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-7 pt-7">
                  <img
                    src={service?.img}
                    alt="service image"
                    className="rounded-xl w-full h-52"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{service?.title}</h2>
                  <div className="card-actions items-center mt-5 text-[#FF3811]">
                    <p className="text-xl font-semibold">
                      Price: ${service?.price}
                    </p>
                    <button className="btn btn-circle btn-error btn-outline text-xl border-0 font-semibold">
                      <FaArrowRight></FaArrowRight>
                    </button>
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

export default Products;
