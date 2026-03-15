const users = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
];

function Stories() {
  return (
    <div className="mb-6">

      <h2 className="text-white mb-3">Stories</h2>

      <div className="flex gap-4">

        {users.map((user, index) => (
          <div key={index} className="w-16 h-16 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 to-yellow-500">
            <img
              src={user}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  );
}

export default Stories;