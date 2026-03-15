function ChatItem({ user }) {
  return (
    <div className="flex items-center gap-3 py-3 cursor-pointer hover:bg-[#1a1a1a] px-2 rounded-lg">

      <img
        src={user.img}
        alt=""
        className="w-10 h-10 rounded-full"
      />

      <div>
        <p className="font-semibold">
          {user.name}
        </p>

        <p className="text-gray-400 text-sm">
          {user.message} · {user.time}
        </p>
      </div>

    </div>
  );
}

export default ChatItem;