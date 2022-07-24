import { useState, useEffect } from "react";
import { PEOPLE_API_URL } from "../assets/dataApi";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPersonData = async () => {
      const response = await fetch(PEOPLE_API_URL);
      const data = await response.json();
      setData(paginationFunction(data.results));
      setLoading(false);
    };
    return () => {
      getPersonData();
    };
  }, []);

  return { loading, data };
};

const paginationFunction = (people) => {
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(people.length / itemsPerPage);

  const newPeople = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;

    return people.slice(start, start + itemsPerPage);
  });
  return newPeople;
};
