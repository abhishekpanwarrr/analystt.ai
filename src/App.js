import React, { useState, useEffect } from "react";
// import { PEOPLE_API_URL } from "./assets/dataApi";
import { useFetch } from "./hooks/useFetch";
import Person from "./components/Person";
import { BsMoon, BsSun } from "react-icons/bs";

const App = () => {
  const { loading, data } = useFetch();
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(0);
  const [theme, setTheme] = useState(false);

  function addToggler() {
    document.documentElement.classList.toggle("dark");
  }

  useEffect(() => {
    if (loading) return;
    setPeople(data[page]);
  }, [loading, page, data]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <div className="w-full h-full dark:bg-[#27262b] dark:text-[#f4f4f4] m-0 p-0 continer">
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
        {/* People Item componete */}
        {people.map((person, index) => {
          return <Person key={`person${index}`} person={person} />;
        })}
        {/* Data fetching loading state */}
        {loading && (
          <h3 className="text-center font-bold text-blue-500 my-10">
            Data Fetching....
          </h3>
        )}
        {/* buttons for loading data for next page */}
        {!loading && (
          <div className="w-full flex justify-between items-center px-8">
            <button className="text-blue-500" onClick={prevPage}>
              prev
            </button>
            <div>
              {data.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={`px-3 py-1 rounded-md ${
                      index === page ? "bg-red-500 " : null
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <button className="text-blue-500" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
