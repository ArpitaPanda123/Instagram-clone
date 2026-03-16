// import { Bell, Send } from "lucide-react";

// function Header() {
//   return (
//     <div className="flex justify-between items-center mb-6">

//       <input
//         type="text"
//         placeholder="Search"
//         className="bg-[#2f3343] text-white px-4 py-2 rounded-lg outline-none w-64"
//       />

//       <div className="flex items-center gap-5">
//         <Bell className="text-white cursor-pointer"/>
//         <Send className="text-white cursor-pointer"/>

//         <button className="bg-pink-500 px-4 py-2 rounded-lg text-white text-sm">
//           Add Photo
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Header;

import { Bell, Send } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between items-center mb-6">

      <input
        type="text"
        placeholder="Search"
        className="bg-[#2f3343] text-white px-4 py-2 rounded-lg outline-none w-64"
      />

      <div className="flex items-center gap-5">
        <Bell className="text-white cursor-pointer"/>
        <Send className="text-white cursor-pointer"/>

        <button className="bg-pink-500 px-4 py-2 rounded-lg text-white text-sm">
          Add Photo
        </button>
      </div>

    </div>
  );
}

export default Header;