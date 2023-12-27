import React from "react";
import { Link } from "react-router-dom";

export default function MyModal({visible,onClose}) {
    if(!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">You are not logged In</h2>
      <Link to="/login" className="underline text-lg ">Login Here</Link>
      <button className="px-2 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white" onClick={onClose}>X</button>
    </div>
  );
}