import { Send } from "lucide-react";

function MessageArea() {
  return (
    <div className="flex-1 flex justify-center items-center">

      <div className="text-center">

        <div className="border-2 border-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <Send size={40} />
        </div>

        <h2 className="text-xl font-bold mb-2">
          Your messages
        </h2>

        <p className="text-gray-400 mb-4">
          Send a message to start a chat.
        </p>

        <button className="bg-blue-500 px-5 py-2 rounded-lg">
          Send message
        </button>

      </div>

    </div>
  );
}

export default MessageArea;