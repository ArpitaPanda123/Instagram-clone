import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import BottomNav from "./components/BottomNav";

function App() {

  const posts = [
    {
      username: "john",
      image: "https://picsum.photos/600/500",
      caption: "Beautiful nature 🌿"
    },
    {
      username: "alex",
      image: "https://picsum.photos/600/501",
      caption: "Amazing sunset 🌅"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-xl mx-auto">

        <Stories />

        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            image={post.image}
            caption={post.caption}
          />
        ))}

      </div>

      <BottomNav />

    </div>
  );
}

export default App;
