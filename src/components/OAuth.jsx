import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex w-full bg-red-700 text-white uppercase justify-center items-center py-3 px-7 rounded shadow-sm hover:bg-red-800 active:bg-red-900 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out ">
      <FcGoogle className="mr-3 bg-white rounded-full text-2xl" />
      Continue with Google
    </button>
  );
}
