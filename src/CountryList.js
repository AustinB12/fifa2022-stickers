import { useEffect, useState } from "react";
import { Country } from "./Country";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  const url =
    process.env.NODE_ENV === "production"
      ? "http://192.168.1.8:7777"
      : "http://localhost:7777/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      });
  }, [url]);

  const saveStickers = async () => {
    console.log(countries);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(countries),
      cache: "default",
    });
    console.log(response.json());
  };

  const updateCountry = (data, name) => {
    console.log("data: ", data);
    const theIndex = countries.findIndex((e) => e.name === name);
    setCountries([
      ...countries.slice(0, theIndex),
      { name: name, stickers: data },
      ...countries.slice(theIndex + 1, countries.length),
    ]);
  };

  return (
    <>
      <button onClick={() => saveStickers()}>Save</button>
      <div className="countryList">
        {countries &&
          countries.map((country) => {
            return (
              <div className="countryContainer" key={country.name}>
                <h2>{country.name}</h2>
                <Country
                  data={country.stickers}
                  name={country.name}
                  updateCountry={updateCountry}
                ></Country>
              </div>
            );
          })}
      </div>
    </>
  );
};

export { CountryList };
