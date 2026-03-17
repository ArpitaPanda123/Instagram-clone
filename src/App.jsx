

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="bg-[#e5e7eb] min-h-screen w-full">
//       <Home />
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Reels from "./pages/Reels";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="bg-[#e5e7eb] min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;