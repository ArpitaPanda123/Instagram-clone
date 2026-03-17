import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Feed from "../components/Feed";

function Home() {
  return (
    <div className="bg-[#3b3f52] min-h-screen flex">

      <Sidebar />

      <div className="flex-1 p-8">
        <Header />
         <Stories />
        <Feed /> 
      </div>

    </div>
  );
}

export default Home;
