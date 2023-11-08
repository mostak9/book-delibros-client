import Banner from "../components/Banner";
import Categories from "../components/Categories";
import OurBlog from "../components/OurBlog";
import OurInfo from "../components/OurInfo/OurInfo";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <OurInfo/>
            <OurBlog/>
        </div>
    );
};

export default Home;