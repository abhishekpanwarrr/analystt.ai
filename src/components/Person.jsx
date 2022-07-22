import React, { useState, memo } from "react";

const Person = ({ person }) => {
  console.log("person rendered");
  const [show, setShow] = useState(false);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col shadow-md rounded-md my-8 mx-4 py-3 px-4 dark:shadow-zinc-700">
      <div className=" flex justify-between items-center">
        <div className="flex flex-col w-[25%] space-y-4">
          <p className="text-sm md:text-base">{person.name}</p>
        </div>
        <div className="flex flex-col w-[25%] space-y-4">
          <p className="font-bold text-sm md:text-base">Gender</p>
          <p className="text-sm md:text-base">
            {capitalizeFirst(person.gender)}
          </p>
        </div>
        <div className="flex flex-col w-[25%] space-y-4">
          <p className="font-bold text-sm md:text-base">DOB</p>
          <p className="text-sm md:text-base">{person.birth_year}</p>
        </div>
        <div className="flex">
          <button
            className="bg-red-500 text-sm md:text-base px-2 py-2 hover:bg-red-600 duration-200 text-white md:px-4 md:py-2 rounded-full"
            onClick={() => setShow((show) => !show)}
          >
            {show ? "Hide" : "View"} Details
          </button>
        </div>
      </div>

      {/* Descriotin secion */}
      <div
        className={`mt-5 md:ml-5 border border-gray-200 rounded-md px-4 py-2 dark:border-zinc-600 ${
          show ? "block" : "hidden"
        }`}
      >
        <h3 className="mt-5 mb-1 font-semibold text-sm md:text-base">
          Description
        </h3>
        <p className="mb-5 text-xs md:text-sm px-1 ">
          Complete body description of the {person.name}
        </p>
        <div className="columns-2 lg:columns-3">
          <div className="space-y-1 ">
            <p className="font-bold text-sm md:text-base">Contact Person</p>
            <h6 className="text-xs md:text-sm">
              {capitalizeFirst(person.name)}
            </h6>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm md:text-base">Skin Color</p>
            <h6 className="text-xs md:text-sm">
              {capitalizeFirst(person.skin_color)}
            </h6>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm md:text-base">Hair Color</p>
            <h6 className="text-xs md:text-sm">
              {capitalizeFirst(person.hair_color)}
            </h6>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm md:text-base">Eye Color</p>
            <h6 className="text-xs md:text-sm">
              {capitalizeFirst(person.eye_color)}
            </h6>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm md:text-base">Height</p>
            <h6 className="text-xs md:text-sm">{person.height}</h6>
          </div>
          <div className="space-y-1">
            <p className="font-bold text-sm md:text-base">Body Mass</p>
            <h6 className="text-xs md:text-sm">{person.mass}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
const MemoPerson = memo(Person);

export default MemoPerson;
