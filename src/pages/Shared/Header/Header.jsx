import moment from "moment";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="text-center ">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium">
        <span className="font-semibold">{moment().format("dddd, ")}</span>
        <span>{moment().format("MMMM D, YYYY")}</span>
      </p>

      <div className="flex">
        <button className="btn btn-secondary">Latest</button>
        <Marquee pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
