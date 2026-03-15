import { Heart, MessageCircle } from "lucide-react";

function PostCard({ image }) {
  return (
    <div className="bg-[#2f3343] rounded-lg overflow-hidden">

      <img
        src={image}
        className="h-40 w-full object-cover"
      />

      <div className="flex justify-between p-3 text-gray-300 text-sm">
        <div className="flex gap-3">
          <Heart size={18}/>
          <MessageCircle size={18}/>
        </div>

        <span>124</span>
      </div>

    </div>
  );
}

export default PostCard;