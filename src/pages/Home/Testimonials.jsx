import quote from '../../assets/icons/quote.svg';
import rating from '../../assets/icons/ratingStars.png';

const Testimonials = () => {
  return (
    <div className="my-20">
      <div className="text-center max-w-[700px] mx-auto">
        <h3 className="text-xl font-bold text-[#FF3811]">Testimonials</h3>
        <h1 className="text-5xl font-bold">What Customers Say</h1>
        <p className="py-6">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        {/* card 1 */}
        <div className="relative flex w-full flex-col rounded-xl border bg-transparent bg-clip-border text-gray-700 shadow-none px-10 py-4">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Tania Andrew
                  </h5>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500">
                    Engineer
                  </p>
                </div>
                <div className="lg:mr-10">
                  <img className="w-12 h-12" src={quote} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mb-4 min-h-[80px]">
              &quot;I was amazed by the expertise of your team. My car runs
              better than ever. As a teacher, I value timeliness, and your
              timely delivery impressed me. Thank you !!!&quot;
            </p>
            <img src={rating} alt="" />
          </div>
        </div>
        {/* card 2 */}
        <div className="relative flex w-full flex-col rounded-xl border bg-transparent bg-clip-border text-gray-700 shadow-none px-10 py-4">
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
                    Mark Johnson
                  </h5>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-500">
                    Businessman
                  </p>
                </div>
                <div className="lg:mr-10">
                  <img className="w-12 h-12" src={quote} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mb-4 min-h-[80px]">
              &quot;Your 24/7 support and top-notch equipment give me confidence
              in your services. I&apos;ve never seen a car maintenance team so
              dedicated. You have my 100% guarantee of future business.&quot;
            </p>
            <img src={rating} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
