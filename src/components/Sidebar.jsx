// import { Home, Search, Heart, MessageCircle, Settings } from "lucide-react";

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
import { Link } from "react-router-dom";
import { Home, Search, Heart, MessageCircle, Settings } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 bg-[#2f3343] text-white p-6 flex flex-col justify-between">

      <div>

        {/* PROFILE IMAGE */}
        {/* <Link to="/profile">
          <div className="flex justify-center mb-8">
            <img
              src="https://i.pravatar.cc/150"
              alt="profile"
              className="w-14 h-14 rounded-full cursor-pointer"
            />
          </div>
        </Link> */}
        <Link to="/profile">
       <div className="flex justify-center mb-8">
         <img
            src="/profile.jpg"
            alt="profile"
            className="w-14 h-14 rounded-full cursor-pointer"
          />
       </div>
        </Link>

        <h1 className="text-xl font-bold mb-8 text-center">Instagram</h1>

        {/* MENU */}
        <div className="flex flex-col gap-6">

          <div className="flex items-center gap-3 cursor-pointer">
            <Home size={20}/>
            Feed
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <Search size={20}/>
            Explore
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <Heart size={20}/>
            Notifications
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <MessageCircle size={20}/>
            Direct
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <Settings size={20}/>
            Settings
          </div>

        </div>

      </div>

      <p className="text-red-400 cursor-pointer">Logout</p>

    </div>
  );
}

export default Sidebar;