import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="flex max-w-6xl mx-auto">

        {/* Sidebar - Desktop only */}
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>

        {/* Feed */}
        <div className="flex-1 p-4">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

      </div>

      {/* Bottom nav - Mobile only */}
      <div className="md:hidden">
        <BottomNav />
      </div>

    </div>
  );
}

export default Home;