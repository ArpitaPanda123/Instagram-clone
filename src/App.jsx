import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Messages from "./pages/Messages";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

          <Route path="/messages" element={<Messages />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;