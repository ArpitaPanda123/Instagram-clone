import { FiHome, FiSearch, FiUser } from "react-icons/fi";

function BottomNav() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 text-xl md:hidden">

      <FiHome />
      <FiSearch />
      <FiUser />

    </div>
  );
}

export default BottomNav;