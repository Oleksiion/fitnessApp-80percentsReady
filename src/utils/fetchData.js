export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ec9a64182amshef508591d8481cap161af9jsn8785bd8cf6d0",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
