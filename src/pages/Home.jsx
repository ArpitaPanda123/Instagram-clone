// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import Stories from "../components/Stories";
// import Feed from "../components/Feed";

// function Home() {
//   return (
//     <div className="bg-[#3b3f52] w-[1200px] h-[650px] rounded-xl flex overflow-hidden shadow-2xl">
      
//       <Sidebar />

//       <div className="flex-1 p-6">
//         <Header />
//         <Stories />
//         <Feed />
//       </div>

//     </div>
//   );
// }

// export default Home;


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