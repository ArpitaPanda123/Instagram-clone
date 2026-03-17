// import { Home, Search, Heart, MessageCircle, Settings } from "lucide-react";

// function Sidebar() {

//   const menu = [
//     { name: "Home", icon: <AiFillHome size={24} />, path: "/" },
//     { name: "Search", icon: <AiOutlineSearch size={24} />, path: "/search" },
//     { name: "Reels", icon: <MdOutlineExplore size={24} />, path: "/reels" },
//     { name: "Messages", icon: <MdOutlineMessage size={24} />, path: "/messages" },
//     { name: "Notifications", icon: <FaRegHeart size={24} />, path: "/notifications" },
//     { name: "Create", icon: <AiOutlinePlusSquare size={24} />, path: "/create" },
//     { name: "Profile", icon: <CgProfile size={24} />, path: "/profile" },
//   ];

//   return (
//     <div className="w-64 bg-[#2f3343] p-6 flex flex-col justify-between">

//       <div>
//         <h1 className="text-white text-xl font-bold mb-8">Instagram</h1>

//         <ul className="space-y-6 text-gray-300">
//           <li className="flex items-center gap-3 cursor-pointer">
//             <Home size={20}/> Feed
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <Search size={20}/> Explore
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <Heart size={20}/> Notifications
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <MessageCircle size={20}/> Direct
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <Settings size={20}/> Settings
//           </li>
//         </ul>
//       </div>

//       <button className="text-red-400 text-sm">Logout</button>
//     </div>
//   );
// }

// export default Sidebar;



// import {
//   Home,
//   Search,
//   Heart,
//   MessageCircle,
//   Settings
// } from "lucide-react";

// function Sidebar() {
//   return (
//     <div className="w-64 bg-[#2f3343] p-6 flex flex-col justify-between">

//       <div>
//         <h1 className="text-white text-xl font-bold mb-8">Instagram</h1>

//         <ul className="space-y-6 text-gray-300">
//           <li className="flex items-center gap-3 cursor-pointer">
//             <Home size={20}/> Feed
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <Search size={20}/> Explore
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <Heart size={20}/> Notifications
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <MessageCircle size={20}/> Direct
//           </li>

//           <li className="flex items-center gap-3 cursor-pointer">
//             <Settings size={20}/> Settings
//           </li>
//         </ul>
//       </div>

//       <button className="text-red-400 text-sm">Logout</button>
//     </div>
//   );
// }

// export default Sidebar;


import {
  Home,
  Search,
  Heart,
  MessageCircle,
  PlusSquare,
  User,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Search", icon: Search, path: "/search" },
    { name: "Reels", icon: PlusSquare, path: "/reels" },
    { name: "Messages", icon: MessageCircle, path: "/messages" },
    { name: "Notifications", icon: Heart, path: "/notifications" },
    { name: "Create", icon: PlusSquare, path: "/create" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="w-64 bg-[#2f3343] p-6 flex flex-col justify-between h-screen">

      {/* Logo */}
      <div>
        <h1 className="text-white text-xl font-bold mb-8">
          Instagram
        </h1>

        {/* Menu */}
        <ul className="space-y-6">
          {menu.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 cursor-pointer transition 
                  ${isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"}`}
                >
                  <Icon size={22} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom */}
      <button className="text-red-400 text-sm hover:text-red-300">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;