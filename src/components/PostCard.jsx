import React from "react";
import { Heart, MessageCircle } from "lucide-react";

function PostCard({ image }) {
  return (
    <div className="bg-[#2f3343] rounded-lg overflow-hidden">
      <img src={image} alt="post" />

      <div className="flex gap-4 p-3">
        <Heart />
        <MessageCircle />
      </div>
    </div>
  );
}

export default PostCard;