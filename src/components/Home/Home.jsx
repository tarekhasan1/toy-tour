import Banner from "../Banner/Banner";
import FeaturedToysCard from "../FeaturedToysCard/FeaturedToysCard";
import Footer from "../Footer/Footer";
import NavigationBar from "../Navbar/NavigationBar";

const Home = () => {
    return (
        <div>
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <FeaturedToysCard></FeaturedToysCard>
        <Footer></Footer>
        </div>
    );
};

export default Home;