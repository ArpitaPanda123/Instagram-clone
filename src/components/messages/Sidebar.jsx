import { Home, Search, Heart, MessageCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-[#2f3343] p-6 flex flex-col justify-between">

      <div>
        <h1 className="text-white text-xl font-bold mb-8">Instagram</h1>

        <ul className="space-y-6 text-gray-300">

          <Link to="/">
            <li className="flex items-center gap-3 cursor-pointer hover:text-white">
              <Home size={20}/> Feed
            </li>
          </Link>

          <li className="flex items-center gap-3 cursor-pointer">
            <Search size={20}/> Explore
          </li>

          <li className="flex items-center gap-3 cursor-pointer">
            <Heart size={20}/> Notifications
          </li>

          <Link to="/messages">
            <li className="flex items-center gap-3 cursor-pointer hover:text-white">
              <MessageCircle size={20}/> Direct
            </li>
          </Link>

          <li className="flex items-center gap-3 cursor-pointer">
            <Settings size={20}/> Settings
          </li>

        </ul>
      </div>

      <button className="text-red-400 text-sm">Logout</button>
    </div>
  );
}

export default Sidebar;