function Stories() {

  const users = [
    "john",
    "alex",
    "emma",
    "david",
    "sophia",
    "mike"
  ];

  return (
    <div className="bg-white border rounded-lg mt-4 p-3 flex gap-4 overflow-x-auto">

      {users.map((user, index) => (
        <div key={index} className="flex flex-col items-center">

          <img
            src={`https://i.pravatar.cc/150?img=${index+1}`}
            className="w-14 h-14 rounded-full border-2 border-pink-500"
          />

          <p className="text-xs">{user}</p>

        </div>
      ))}

    </div>
  );
}

export default Stories;