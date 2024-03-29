import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import OurTeam from './OurTeam';
import Products from './Products';
import Services from './Services';
import Testimonials from './Testimonials';
import WhyUs from './WhyUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <OurTeam></OurTeam>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
