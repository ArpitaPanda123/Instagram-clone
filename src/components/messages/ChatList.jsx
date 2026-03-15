import ChatItem from "./ChatItem";

const users = [
  {
    name: "miss_nayak",
    message: "sent an attachment",
    time: "26m",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Twinkle",
    message: "Kie ie",
    time: "11h",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Bhagyalaxmi Behera",
    message: "sent an attachment",
    time: "12h",
    img: "https://i.pravatar.cc/40?img=3",
  },
];

function ChatList() {
  return (
    <div className="w-[350px] border-r border-gray-800 p-5">

      <h2 className="font-bold text-lg mb-4">
        sucharita_mama_143
      </h2>

      <input
        type="text"
        placeholder="Search"
        className="w-full bg-[#262626] p-2 rounded-md mb-4"
      />

      <h3 className="font-semibold mb-3">Messages</h3>

      {users.map((user, index) => (
        <ChatItem key={index} user={user} />
      ))}

    </div>
  );
}

export default ChatList;