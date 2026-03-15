import PostCard from "./PostCard";

const posts = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
];

function Feed() {
  return (
    <div className="grid grid-cols-3 gap-4">

      {posts.map((post, index) => (
        <PostCard key={index} image={post} />
      ))}

    </div>
  );
}

export default Feed;