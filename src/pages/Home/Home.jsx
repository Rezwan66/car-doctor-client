import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import OurTeam from './OurTeam';
import Products from './Products';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
