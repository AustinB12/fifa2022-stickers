import { useEffect, useState } from "react";
import { Country } from "./Country";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.data);
      });
  }, []);

  const saveStickers = async () => {
    console.log(countries);
    const response = await fetch("http://localhost:7777/", {
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
