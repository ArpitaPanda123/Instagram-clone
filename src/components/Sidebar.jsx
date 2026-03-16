import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlusSquare
} from "react-icons/ai";

import {
  MdOutlineExplore,
  MdOutlineMessage
} from "react-icons/md";

import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Sidebar() {

  const menu = [
    { name: "Home", icon: <AiFillHome size={24} />, path: "/" },
    { name: "Search", icon: <AiOutlineSearch size={24} />, path: "/search" },
    { name: "Reels", icon: <MdOutlineExplore size={24} />, path: "/reels" },
    { name: "Messages", icon: <MdOutlineMessage size={24} />, path: "/messages" },
    { name: "Notifications", icon: <FaRegHeart size={24} />, path: "/notifications" },
    { name: "Create", icon: <AiOutlinePlusSquare size={24} />, path: "/create" },
    { name: "Profile", icon: <CgProfile size={24} />, path: "/profile" },
  ];

  return (
    <div className="w-64 h-screen border-r p-5 fixed">

      <h1 className="text-2xl font-bold mb-10">
        Instagram
      </h1>

      <div className="space-y-6">

        {menu.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 text-lg hover:bg-gray-100 p-2 rounded ${
                isActive ? "font-bold" : ""
              }`
            }
          >
            {item.icon}
            {item.name}

          </NavLink>

        ))}

      </div>

    </div>
  );
}

export default Sidebar;