import React from "react";
import "./styles/main.css";
function App() {
  return (
    <div class="h-64">
      <div class="p-4 m-4 bg-green-600 rounded-md shadow-xl">
        <h1 class="text-2xl font-bold text-white">Tailwind css demo</h1>
      </div>
      <div class="p-4 m-4 bg-white rounded-md h-full shadow-xl">
        <h2 class="text-green-900">Have fun using tailwind css</h2>
        <button class="bg-blue-500 rounded hover:bg-blue-700 text-center text-white font-bold px-5 py-3 shadow-xl my-5">
          Tailwind
        </button>
        <div class="bg-blue-900 text-center py-4 lg:px-4">
          <div class="p-2 bg-blue-800 items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex">
            <span
              class="flex rounded-full bg-blue-500 uppercase font-bold px-2 py-1 text-xs mr-3"
              role="alert"
            >
              New
            </span>

            <span class="semibold mr-2 text-flex flex-auto">
              Use tailwind css
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
