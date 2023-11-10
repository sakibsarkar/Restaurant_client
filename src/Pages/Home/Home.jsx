import "./Home.css";
import Banner from "./HomeContent/Banner/Banner/Banner";
import Nav from "../../Nav/Nav";
import OnlineOrder from "./HomeContent/OnlineOrder/OnlineOrder";

const Home = () => {
    return (
        <>
            <Nav></Nav>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>

        </>
    );
};

export default Home;