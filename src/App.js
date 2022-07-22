import React, { useState, useEffect } from "react";
import { PEOPLE_API_URL } from "./assets/dataApi";
import Person from "./components/Person";
import { BsMoon, BsSun } from "react-icons/bs";
const App = () => {
  const [people, setPeople] = useState([]);
  const [theme, setTheme] = useState(false);

  function addToggler() {
    document.documentElement.classList.toggle("dark");
  }
  useEffect(() => {
    async function getData() {
      const response = await fetch(PEOPLE_API_URL);
      const data = await response.json();
      setPeople(data.results);
    }
    getData();
  }, []);
  return (
    <div className="w-full h-full dark:bg-[#27262b] dark:text-[#f4f4f4] m-0 p-0">
      <div className="max-w-6xl mx-auto font-montserrat h-full ">
        <div className="py-1 mt-5 mx-4 dark:shadow-blue-600 shadow-sm flex justify-between items-center px-12">
          <h1 className="text-center text-xl md:text-2xl font-bold text-blue-500 uppercase">
            Analystt.ai
          </h1>
          <button className="cursor-pointer">
            {theme ? (
              <BsMoon
                onClick={() => {
                  addToggler();
                  setTheme((theme) => !theme);
                }}
                size={28}
              />
            ) : (
              <BsSun
                onClick={() => {
                  addToggler();
                  setTheme((theme) => !theme);
                }}
                size={28}
              />
            )}
          </button>
        </div>

        {people.map((person, index) => {
          return <Person key={`person${index}`} person={person} />;
        })}
      </div>
    </div>
  );
};

export default App;
