// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="bg-[#e5e7eb] min-h-screen w-full">
//       <Home />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <div className="bg-[#e5e7eb] min-h-screen">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;

