import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import RightSideNavBar from "../Shared/RightSideNavBar/RightSideNavBar";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const ANews = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const [currentNews, setCurrentNews] = useState([]);

  useEffect(() => {
    const newNews = news.filter((currNews) => currNews._id === id);
    setCurrentNews(newNews[0]);
  }, []);
  console.log(currentNews);

  const { title, image_url, details } = currentNews;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      {/* <h2 className="text-3xl font-poppins">I am Home</h2> */}
      <div className="grid md:grid-cols-4 gap-4">
        <div></div>
        {/* news section */}
        <div className="md:col-span-2 space-y-4">
          <img src={image_url} alt="" />
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="leading-8">{details}</p>
          </div>
          <button className="btn bg-[#D72050] text-white font-medium text-xl">
            <FaArrowLeftLong></FaArrowLeftLong>
            All news in this category
          </button>
        </div>
        <div className="">
          <RightSideNavBar></RightSideNavBar>
        </div>
      </div>
    </div>
  );
};

ANews.propTypes = {};

export default ANews;
