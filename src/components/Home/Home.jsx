import useTitle from "../../routes/Hooks/useTitle";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import FeaturedToysCard from "../FeaturedToysCard/FeaturedToysCard";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    useTitle('Toy Tour | Home')
    return (
        <div>
        <Banner></Banner>
        <FeaturedToysCard></FeaturedToysCard>
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
        <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;