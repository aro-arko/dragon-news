import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qzone1 from "../../../assets/images/qZone1.png";
import qzone2 from "../../../assets/images/qZone2.png";
import qzone3 from "../../../assets/images/qZone3.png";

const RightSideNavBar = () => {
  return (
    <div>
      {/* Login with */}
      <div className="space-y-3 p-4">
        <h3 className="text-xl font-semibold">Login With</h3>
        <button className="p-3 flex items-center btn w-full btn-outline">
          <FaGoogle className="mr-2 h-6 w-6"></FaGoogle>
          <span className="text-base">Login with Google</span>
        </button>
        <button className="p-3 flex items-center btn w-full btn-outline">
          <FaGithub className="mr-2 h-6 w-6"></FaGithub>
          <span className="text-base">Login with Github</span>
        </button>
      </div>

      {/* find us on */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-3">Find Us On</h3>
        <a href="#" className="flex items-center p-4 border rounded-t-lg">
          <FaFacebook className="h-7 w-7 mr-2"></FaFacebook>
          <span className="text-base">Facebook</span>
        </a>
        <a href="#" className="flex items-center p-4 border-x">
          <FaTwitter className="h-7 w-7 mr-2"></FaTwitter>
          <span className="text-base">Twitter</span>
        </a>
        <a href="#" className="flex items-center p-4 border rounded-b-lg">
          <FaInstagram className="h-7 w-7 mr-2"></FaInstagram>
          <span className="text-base">Instragram</span>
        </a>
      </div>

      {/* Q Zone */}
      <div className="space-y-3 p-4">
        <h3 className="text-xl font-semibold mb-3">Q Zone</h3>

        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNavBar;
