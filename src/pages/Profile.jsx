import React from "react";
import { FaInstagram } from "react-icons/fa";

function Profile() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">

      {/* Top Section */}
      <div className="flex items-center gap-10">

        {/* Profile Image */}
        {/* <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-32 h-32 rounded-full object-cover"
        /> */}
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-32 h-32 rounded-full"
         />

        {/* Profile Details */}
        <div>

          {/* Username + Instagram Icon */}
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">username</h2>
            <FaInstagram className="text-pink-500 text-2xl" />
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4 text-lg">
            <p><span className="font-bold">12</span> posts</p>
            <p><span className="font-bold">540</span> followers</p>
            <p><span className="font-bold">180</span> following</p>
          </div>

          {/* Bio */}
          <div className="mt-4">
            <p className="font-semibold">Your Name</p>
            <p className="text-gray-600">Arpita Panda</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;