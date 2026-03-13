import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function Post({ username, image, caption }) {
  return (
    <div className="bg-white border rounded-lg mt-6">

      <div className="p-3 font-semibold">
        {username}
      </div>

      <img src={image} className="w-full" />

      <div className="flex gap-4 text-2xl p-3">
        <AiOutlineHeart />
        <FaRegComment />
        <FiSend />
      </div>

      <div className="px-3 pb-4">
        <p>
          <span className="font-semibold">{username}</span> {caption}
        </p>
      </div>

    </div>
  );
}

export default Post;