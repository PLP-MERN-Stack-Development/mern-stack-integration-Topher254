import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Search, SendHorizonal } from 'lucide-react';
import { useAppContext } from '../context/AppContext';


export default function Header() {
const {setInput} = useAppContext();
const inputRef = useRef();
const onSubmitHandler=async()=>{
  e.preventDefault();
  setInput(inputRef.current.value);
}

  return (
    <div className=" ">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-2">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hey, We're <span className="underline decoration-4 decoration-pink-500 italic text-pink-500">Rida</span>. See our
            <br />
            thoughts, stories and ideas.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Welcome to Rida! Thought-provoking articles, inspiring stories, and expert insights across industries
            and interests.
          </p>
        </div>
<form onSubmit={onSubmitHandler}>
        <div className="max-w-xl mx-auto mb-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              ref={inputRef}
              required
              placeholder="Search anything you are looking for ..."
              className="w-full pl-12 pr-12 py-2 rounded-full bg-white shadow-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700 placeholder-gray-400"
            />
            <button type='submit' className="absolute inset-y-0 right-2 flex items-center justify-center w-10 h-10 my-auto bg-white rounded-full hover:bg-gray-50 transition-colors">
              <SendHorizonal className="w-5 h-5 cursor-pointer text-gray-600" />
            </button>
          </div>
          
        </div>
</form>
      </div>
    </div>
  );
}
