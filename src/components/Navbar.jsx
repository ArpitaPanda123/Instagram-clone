import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

function Navbar() {
  return (
    <div className="bg-white border-b sticky top-0 z-10">

      <div className="max-w-xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">Instagram</h1>

        <div className="flex gap-5 text-2xl">
          <AiOutlineHeart />
          <FiSend />
        </div>

      </div>

    </div>
  );
}

export default Navbar;