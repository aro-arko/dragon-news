import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNavBar from "../Shared/LeftSideNavBar/LeftSideNavBar";
import RightSideNavBar from "../Shared/RightSideNavBar/RightSideNavBar";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  // console.log(news);
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      {/* <h2 className="text-3xl font-poppins">I am Home</h2> */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="">
          <LeftSideNavBar></LeftSideNavBar>
        </div>

        {/* news section */}
        <div className="md:col-span-2">
          {news.map((singleNews) => (
            <NewsCard singleNews={singleNews} key={singleNews._id}></NewsCard>
          ))}
        </div>
        <div className="">
          <RightSideNavBar></RightSideNavBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
