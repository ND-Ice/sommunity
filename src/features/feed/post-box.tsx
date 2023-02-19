import {
  FaceSmileIcon,
  PhotoIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function PostBox() {
  return (
    <div className="max-w-xl rounded-lg bg-white p-6 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            fill
            alt="User Avatar"
          />
        </div>
        <input
          placeholder="Whats Happening?"
          className="flex-1 rounded-lg bg-gray-50 p-2 px-4 outline-none"
        />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <div className="flex items-center gap-2 rounded-lg p-2 px-4 text-gray-600 hover:bg-gray-100">
            <VideoCameraIcon className="h-5 w-5" />
            <span>Live Video</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg p-2 px-4 text-gray-600 hover:bg-gray-100">
            <PhotoIcon className="h-5 w-5" />
            <span>Photo/Video</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg p-2 px-4 text-gray-600 hover:bg-gray-100">
            <FaceSmileIcon className="h-5 w-5" />
            <span>Feeling</span>
          </div>
        </div>
        <button
          type="button"
          className="rounded-lg bg-blue-500 p-2 px-8 text-white transition-all duration-100 ease-linear hover:bg-blue-500/80"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default PostBox;
